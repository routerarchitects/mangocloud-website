---
id: architecture-services-overview
slug: /architecture/services-overview
title: Services Overview
sidebar_position: 2
---

# Services Overview

Each MangoCloud service has a single responsibility to simplify scaling and upgrades.

## API Gateway

- Terminates TLS for UI, CLI, and automation clients
- Performs JWT validation and tenant routing
- Exposes REST and gRPC interfaces documented via OpenAPI

## Device Control Service

- Maintains state machines for onboarding and lifecycle events
- Pushes firmware, telemetry sampling rules, and policy bundles
- Provides hooks for external automation (webhooks, message bus)

## Configuration Service

- Stores reusable configuration profiles
- Validates templates before rollout
- Supports GitOps-driven pull requests with automatic drift detection

## Telemetry Service

- Ingests metrics, logs, and events from APs, switches, and OLGs
- Normalizes datapoints into a unified schema
- Publishes alerts to the API Gateway and message bus

## Supporting Services

- **Identity:** Handles SSO integration and RBAC policy evaluation.
- **Scheduler:** Coordinates asynchronous jobs such as backups, cleanup, and analytics exports.
