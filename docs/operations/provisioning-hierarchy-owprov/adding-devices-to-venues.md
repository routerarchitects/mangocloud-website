---
slug: /operations/provisioning-hierarchy-owprov/adding-devices-to-venues
title: Adding Devices to Venues
---

Use cases:

- Keep devices grouped by Venue for easier management (inventory, provisioning, monitoring).
- Apply Venue-level configuration automatically.
- Add the device to the correct Venue so it gets the right configuration.

Steps:

1. Log in to OWPROV-UI: `https://<DOMAIN_NAME>:8443`.
2. Ensure the device does not exist in Inventory and is not assigned to another Venue/Entity.
3. Open Entities / Venues and select the target Venue.
4. Go to Venue Inventory and click + (Create).

![Venue inventory create](/img/operations/mango-cloud-operations-guide/image12.webp)

5. Enter device details (serial, name, device type).
6. Click Save.

![Save device to venue](/img/operations/mango-cloud-operations-guide/image19.webp)

7. Confirm the device appears in the Venue Device list.

![Venue device list](/img/operations/mango-cloud-operations-guide/image54.webp)

Result: The device is now linked to the Venue and inherits Venue/Entity configuration.
