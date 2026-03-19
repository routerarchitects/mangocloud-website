---
slug: /operations/provisioning-hierarchy-owprov/provisioning-model-overview
title: Provisioning Model Overview
---

Devices are provisioned using a hierarchical configuration model: `Entity -> Venue -> Subscriber`, eliminating the need for manual, per-device configuration.

## Design Principles

### Scalable by Design

Leverage a structured hierarchy to manage large deployments efficiently.

### Configuration Reusability

Apply shared templates at higher levels such as Entity or Venue and allow specific overrides at lower levels such as Subscriber or Device.

### Consistency Across Layers

Maintain uniform workflows and configuration logic across Entities, Venues, and Devices.
