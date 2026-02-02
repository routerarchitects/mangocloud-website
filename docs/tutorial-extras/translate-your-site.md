---
slug: /telemetry/pipeline
title: Telemetry Pipeline
sidebar_position: 1
---

# Telemetry Pipeline

Telemetry provides insight into device health and user experience. MangoCloud collects, normalizes, and routes telemetry for APs, switches, and OLGs.

## Collection

- OpenLAN devices stream metrics and events via secure WebSockets.
- Edge collectors batch data to reduce bandwidth and backpressure.
- Sampling rates can be tuned per profile.

## Processing

- Telemetry Service validates payloads and enriches them with tenant metadata.
- Events are stored in time-series databases and mirrored to Kafka for consumers.
- Alerts trigger when thresholds defined in configuration profiles are crossed.

## Consumption

- Operators view dashboards in the MangoCloud UI.
- APIs expose historical data for OSS/BSS integrations.
- Webhooks notify downstream systems when anomalies occur.

## Best Practices

- Keep telemetry retention manageable by forwarding long-term storage to data lakes.
- Use the message bus replay feature for retroactive analysis.
- Enable anomaly detection models as they become available in future releases.
