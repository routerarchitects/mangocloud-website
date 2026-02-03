---
slug: /deployment/cloud/deploying-mangocloud
title: Deploying MangoCloud
---

MangoCloud includes controller, gateway, provisioning services, and supporting infrastructure deployed via Docker Compose.

## EC2 Requirements

- Choose an instance with at least 8 GB RAM.
- Use Ubuntu 20.04 LTS or later.

## Ports & Security Groups

Allow these inbound ports in the Security Group:

- TCP: 22, 80, 443, 5000, 5912, 5913, 8443, 15002, 16001, 16002, 16003, 16004, 16005, 16006, 16009, 16101, 16102, 16104
