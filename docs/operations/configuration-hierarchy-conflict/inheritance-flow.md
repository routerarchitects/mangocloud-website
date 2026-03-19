---
slug: /operations/configuration-hierarchy-conflict/inheritance-flow
title: Inheritance Flow
---

Configuration is applied using the following hierarchy:

`Entity -> Venue -> Device`

Each level inherits from the one above it, with the ability to override settings at lower levels.

## Priority Order (Highest to Lowest)

When the same configuration is defined at multiple levels, the following priority is applied:

1. Device-level configuration (highest priority)
2. Venue-level configuration
3. Entity-level configuration (lowest priority)

This means device-specific settings override Venue and Entity settings, and Venue settings override Entity settings.
