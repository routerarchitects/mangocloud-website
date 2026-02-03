---
slug: /operations/device-onboarding/device-trust-certificates
title: Device Trust & Certificates
---

Device certificates should be generated/signed using the same CA and Root used in your ucentral-cloud deployment.

Verify that the Cloud CA and Device CA are the same by comparing MD5 hashes:

```bash
# On controller
md5sum openwifi-sdk/wlan-cloud-ucentral-deploy/docker-compose/certs/clientcas.pem

# On device
md5sum /etc/ucentral/operational.ca
```

If the MD5 hashes are identical, the device CA matches the controller CA.
