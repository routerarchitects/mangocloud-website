---
slug: /deployment/cloud/installation-setup
title: Installation & Setup
---

SSH into your instance:

```bash
ssh -i <your-key.pem> ubuntu@<EC2-PUBLIC-IP>
```

Update packages and install tools:

```bash
sudo apt update
sudo apt install net-tools certbot -y
```

Create working directory and clone the deployment repo:

```bash
mkdir openwifi-sdk
cd openwifi-sdk
git clone https://github.com/Telecominfraproject/wlan-cloud-ucentral-deploy.git
cd wlan-cloud-ucentral-deploy/docker-compose
git checkout release/v3.2.0
```

Note: Remove port 80 from `docker-compose.yml`, as it is required by Certbot during certificate renewal.

### Configure S3 Bucket in `owfms.env`

Edit `owfms.env` and update these values:

```bash
S3_BUCKETNAME=<S3_BUCKETNAME>
S3_REGION=<S3_REGION>
S3_SECRET=<S3_SECRET>
S3_KEY=<S3_KEY>
S3_BUCKET_URI=<S3_BUCKET_URI>
FIRMWAREDB_MAXAGE=3650
```

### Update `docker-compose.yml` images and matching `.env` files

If you are using custom-built images (or different tags), replace the image names/tags in `docker-compose.yml`, then review each service's referenced `.env` file to ensure required variables and paths match your deployment.

## Docker & Docker Compose

Install Docker and Docker Compose:

```bash
sudo apt install docker.io docker-compose -y
sudo usermod -aG docker $USER
newgrp docker
sudo chown -R $USER:$USER .
```

## Repo checkout & versions

Ensure all component versions align with the `release/v3.2.0` deployment branch.
