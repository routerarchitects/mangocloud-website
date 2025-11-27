---
id: configuration-config-profiles
slug: /configuration/config-profiles
title: Configuration Profiles
sidebar_position: 1
---

# Configuration Profiles

Configuration profiles allow operators to define reusable policies and apply them to device groups.

## Profile Types

- **Wireless:** SSIDs, security, channel plans, and QoS.
- **Wired:** VLANs, trunk/edge templates, PoE budgets.
- **Gateway:** WAN links, tunnels, firewall rules.

## Lifecycle

1. **Create:** Build profiles in the UI or via the Configuration API.
2. **Validate:** Run static validation and, optionally, device simulators.
3. **Publish:** Version the profile and associate it with tenants or sites.
4. **Roll Out:** Target device groups and monitor status.

## Best Practices

- Store profile definitions in Git and sync via API.
- Use variables for tenant-specific overrides.
- Schedule maintenance windows for large rollouts.
