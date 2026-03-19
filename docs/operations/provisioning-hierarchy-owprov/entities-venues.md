---
slug: /operations/provisioning-hierarchy-owprov/entities-venues
title: Entities & Venues
---

Entities define the organizational scope, while Venues define the physical or site-level scope within that organization.

## Overview

- Entities represent logical groupings such as a company, region, or business unit.
- Venues represent specific locations, for example an office, store, or site, under an Entity.
- Devices inherit configuration from `Entity -> Venue`, enabling centralized and scalable provisioning.

## Entity

Entities are used to organize devices and apply shared configurations across multiple locations.

### Create an Entity

1. Log in to the OWPROV UI.
2. Navigate to `Entities` from the left menu.
3. Select the `Top Entity` or parent entity, if applicable.

![Top Entity selection](/img/operations/mango-cloud-operations-guide/image37.webp)

4. Click `+ Entity`.

![Add Entity button](/img/operations/mango-cloud-operations-guide/image36.webp)

5. Enter:
   - Name:
   - Description(Optional)
6. Click **Save**.

![Entity details form](/img/operations/mango-cloud-operations-guide/image46.webp)

## Venue

Venues represent deployment sites under an Entity where devices are assigned and provisioned.

### Create a Venue

1. Select the target Entity.
2. Click `+ Venue`.

![Add Venue button](/img/operations/mango-cloud-operations-guide/image50.webp)

3. Enter:
   - Name:
   - Description(Optional)
4. Click **Save**.

![Venue details form](/img/operations/mango-cloud-operations-guide/image49.webp)

## Result

- The Entity is added to the organizational hierarchy.
- The Venue is created under the selected Entity.
- Devices can now be assigned to the Venue and inherit configurations accordingly.
