---
slug: /operations/troubleshooting-operations/certificate-issues
title: Certificate Issues
---

If you encounter errors related to secure connections, it is often due to incorrect or mismatched certificate configurations.

### How to Troubleshoot

- Verify that the certificate paths configured in `.env` files are correct and point to valid certificate and key files

- Ensure all services are using the right and updated certificates

- If certificates or paths were recently changed, re-run the certificate generation scripts tp update them synchronize them across services
