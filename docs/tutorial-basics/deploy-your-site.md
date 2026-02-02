---
slug: /deployment/kubernetes
title: Deploy on Kubernetes
sidebar_position: 1
---

# Deploy on Kubernetes

Kubernetes is the recommended environment for MangoCloud because it enables horizontal scaling and rapid upgrades.

## Cluster Requirements

- Kubernetes 1.27+
- Persistent storage class for PostgreSQL/etcd
- Load balancer or ingress controller with TLS termination
- External message bus (Kafka/NATS) or managed equivalent

## Installation Steps

1. **Clone the repository:** `git clone https://github.com/RouterArchitects/mangocloud-website`
2. **Namespace prep:** `kubectl create namespace mangocloud`
3. **Secrets:** Apply manifests for database credentials, API keys, and TLS certificates.
4. **Deploy controllers:** `kubectl apply -n mangocloud -f deploy/kubernetes/`
5. **Verify health:** Use `kubectl get pods` and `kubectl logs` to ensure all services are running.

## Post-Deployment

- Configure ingress hostnames (e.g., `api.mangowifi.cloud`).
- Enable autoscaling for stateless services.
- Set up backup jobs for PostgreSQL and configuration snapshots.
