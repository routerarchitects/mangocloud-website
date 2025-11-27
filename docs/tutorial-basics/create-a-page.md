---
id: architecture-system-architecture
slug: /architecture/system-architecture
title: System Architecture
sidebar_position: 1
---

# System Architecture

MangoCloud is a distributed controller composed of stateless control planes, persistent data services, and device adapters. This overview highlights how each component collaborates to manage OpenWiFi hardware.

## Control Plane

- **API Gateway:** Terminates TLS, authenticates tenants, and enforces rate limiting.
- **Workflow Engine:** Orchestrates onboarding, configuration, and firmware rollouts using event-driven pipelines.
- **Policy Compiler:** Converts tenant intent into device-specific configuration bundles.

## Data Services

- **PostgreSQL/etcd:** Stores tenant metadata, device inventory, and policy history.
- **Message Bus (Kafka/NATS):** Streams telemetry and operational events between services.
- **Object Storage:** Retains firmware artifacts, diagnostic bundles, and backup exports.

## Device Adapters

- **Access Points:** Handles provisioning, heartbeat, and channel/power adjustments.
- **Switches:** Applies VLAN, QoS, and PoE policies with per-port observability.
- **OLGs:** Maintains tunnel termination, WAN assurance metrics, and routing policies.

## Deployment Guidance

- Deploy services as containers with horizontal pod autoscaling.
- Use separate namespaces for staging and production clusters.
- Enable zero-downtime upgrades via rolling deployments and health probes.
