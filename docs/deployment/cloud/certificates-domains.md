---
slug: /deployment/cloud/certificates-domains
title: Certificates & Domains
---

Manually replace these files in the `certs/` directory with your valid certs:

- `clientcas.pem`
- `issuer.pem`
- `root.pem`
- `websocket-cert.pem`
- `websocket-key.pem`

## Replace `<DOMAIN_NAME>` with your actual domain name

Use your domain for the OpenWiFi deployment. Example:

`<DOMAIN_NAME>` -> `openwifi1.routerarchitects.com`

Update Hostname References:

Replace all instances of `openwifi.wlan.local` with your domain:

```bash
sudo find . -type f -exec sed -i 's/openwifi.wlan.local/<DOMAIN_NAME>/g' {} +
```

## Internal vs Public certs

- Internal certs are used for internal service-to-service trust.
- Public REST certs are required for externally reachable REST API endpoints.

## Let's Encrypt setup

Ensure port 80 is open on your EC2 instance (in AWS Security Group). Then run:

```bash
sudo certbot certonly --standalone \
  --key-type rsa \
  --cert-name <DOMAIN_NAME> \
  -d <DOMAIN_NAME> \
  -m your-email@example.com \
  --agree-tos --non-interactive --force-renewal
```

Certs will be created in `/etc/letsencrypt/live/<DOMAIN_NAME>/`.

Copy them into the OpenWiFi certs directory:

```bash
cd /home/ubuntu/openwifi-sdk/wlan-cloud-ucentral-deploy/docker-compose
sudo cp /etc/letsencrypt/live/<DOMAIN_NAME>/privkey.pem   certs/restapi-public-key.pem
sudo cp /etc/letsencrypt/live/<DOMAIN_NAME>/fullchain.pem certs/restapi-public-cert.pem
sudo cp /etc/letsencrypt/live/<DOMAIN_NAME>/chain.pem     certs/restapi-public-ca.pem
sudo chown ubuntu:ubuntu certs/restapi-public-*.pem
sudo chmod 664 certs/restapi-public-*.pem
ls -l certs/
```

## REST API cert handling

Create a script named `update_openwifi_public_certs.sh` inside the `docker-compose` directory:

```bash
cat > update_openwifi_public_certs.sh << 'EOF_SCRIPT'
#!/usr/bin/env bash
# update_openwifi_public_certs.sh
# Purpose: Adjust PUBLIC REST cert variables in all *.env files.
# - Uncomments (if commented): RESTAPI_HOST_PORT, RESTAPI_HOST_KEY_PASSWORD, RESTAPI_HOST_{ROOTCA,CERT,KEY}
# - Sets filenames to restapi-public-{ca,cert,key}.pem (keeps $<SERVICE>_ROOT/certs/ prefix)
# - Does NOT modify INTERNAL_* variables.
set -euo pipefail

echo "==> Updating public REST cert settings in all *.env files"
changed_any=0

for f in $(find . -name "*.env"); do
  echo "   -> $f"
  # 1) Uncomment the five public REST lines if they are commented.
  sed -i -E '
    s/^[[:space:]]*#([[:space:]]*RESTAPI_HOST_PORT=)/\1/;
    s/^[[:space:]]*#([[:space:]]*RESTAPI_HOST_KEY_PASSWORD=)/\1/;
    s/^[[:space:]]*#([[:space:]]*RESTAPI_HOST_ROOTCA=)/\1/;
    s/^[[:space:]]*#([[:space:]]*RESTAPI_HOST_CERT=)/\1/;
    s/^[[:space:]]*#([[:space:]]*RESTAPI_HOST_KEY=)/\1/;
  ' "$f"

  # 2) Update only the public cert filenames (keep path prefix intact).
  sed -i -E '
    s|^([[:space:]]*RESTAPI_HOST_ROOTCA=\$[A-Z_]+/certs/)[^[:space:]]+|\1restapi-public-ca.pem|;
    s|^([[:space:]]*RESTAPI_HOST_CERT=\$[A-Z_]+/certs/)[^[:space:]]+|\1restapi-public-cert.pem|;
    s|^([[:space:]]*RESTAPI_HOST_KEY=\$[A-Z_]+/certs/)[^[:space:]]+|\1restapi-public-key.pem|;
  ' "$f"
  changed_any=1

  # 3) Log note if any keys are missing.
  for key in RESTAPI_HOST_PORT RESTAPI_HOST_KEY_PASSWORD RESTAPI_HOST_ROOTCA RESTAPI_HOST_CERT RESTAPI_HOST_KEY; do
    if ! grep -qE "^[[:space:]]*$key=" "$f"; then
      echo "      (note) $key not found in $f -- skipped"
    fi
  done
done

if [ "$changed_any" -eq 1 ]; then
  echo "==> Done. Public REST cert paths now use: restapi-public-{cert,key,ca}.pem"
  echo "==> Verify a couple of files, then run: docker-compose down && docker-compose up -d"
else
  echo "==> No *.env files found to update."
fi
EOF_SCRIPT
```

Make the script executable and run it:

```bash
chmod +x update_openwifi_public_certs.sh
./update_openwifi_public_certs.sh
```

Update the `owgw-ui` and `owprov-ui` sections to use public REST certs:

```diff
-      - "./certs/restapi-cert.pem:/etc/nginx/restapi-cert.pem"
-      - "./certs/restapi-key.pem:/etc/nginx/restapi-key.pem"
+      - "./certs/restapi-public-cert.pem:/etc/nginx/restapi-cert.pem"
+      - "./certs/restapi-public-key.pem:/etc/nginx/restapi-key.pem"
```
