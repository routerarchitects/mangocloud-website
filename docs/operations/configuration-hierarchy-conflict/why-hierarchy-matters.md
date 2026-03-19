---
slug: /operations/configuration-hierarchy-conflict/why-hierarchy-matters
title: Why Hierarchy Matters
---

Hierarchy matters because it helps you understand which configuration is ultimately applied when settings exist at multiple levels.

It also helps you place changes at the correct level:

- `Entity` = common settings shared across many Venues
- `Venue` = site-specific settings for a particular Venue
- `Device` = overrides for a single device

It also improves troubleshooting by letting you verify the final applied settings through the `Computed Configuration`.
