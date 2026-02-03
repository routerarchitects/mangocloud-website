---
slug: /intro/getting-started
title: Getting Started
sidebar_position: 2
---

# Getting Started

Use this guide to install MangoCloud locally or in a production cluster.

## Prerequisites

- Node.js 20+ for UI builds
- Container runtime (Docker or containerd)
- Kubernetes cluster (recommended) or Docker Compose environment
- Access to OpenLAN devices (OpenWiFi Access Points, OpenLAN Switches, or OpenLAN Gateways) for validation

## Installation Options

### Kubernetes

1. Clone the MangoCloud repository.
2. Apply the base manifests from `deploy/kubernetes`.
3. Configure secrets for database, message bus, and API keys.
4. Expose the controller through an ingress with TLS.

### Docker Compose

1. Copy `deploy/docker-compose.yml`.
2. Set environment variables for controller services.
3. Run `docker compose up -d` and monitor the logs until services are healthy.

## Next Steps

- Review [System Architecture](/docs/architecture/system-architecture) for component responsibilities.
- Prepare [Configuration Profiles](/docs/configuration/config-profiles) before onboarding devices.
