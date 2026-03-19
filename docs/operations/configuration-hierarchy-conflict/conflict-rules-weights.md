---
slug: /operations/configuration-hierarchy-conflict/conflict-rules-weights
title: Conflict Rules & Weights
---

When the same configuration field is defined at multiple levels (`Entity`, `Venue`, and `Device`), OWPROV uses a weight-based system to decide which value should be applied.

## How It Works

- Each configuration value is assigned a weight
- OWPROV compares the weights of the same field across all levels
- The value with the highest weight takes priority
- The selected value becomes part of the computed configuration sent to the device

## Key Points

- Higher weight = higher priority
- Device-level settings typically have higher weights than Venue and Entity
- Venue-level settings override Entity when weights are higher
- This mechanism ensures predictable conflict resolution when multiple values exist
