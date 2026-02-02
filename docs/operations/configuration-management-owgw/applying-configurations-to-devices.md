---
slug: /operations/configuration-management-owgw/applying-configurations-to-devices
title: Applying Configurations to Devices
---

Use cases:

- Push a new service/radio/SSID configuration.
- Apply a quick fix (interface, channel, bandwidth, services like SSH/LLDP).
- Re-apply a known-good configuration.

Steps:

1. Select the target device in the device list.
2. Open the device page and click Configure.

![Configure command on device](/img/operations/mango-cloud-operations-guide/image38.webp)

3. Provide the configuration JSON using one of these options:
   - Import a known-good JSON file.
   - Edit using the UI sections.
   - Expert mode to edit raw JSON.

![Expert mode editor](/img/operations/mango-cloud-operations-guide/image43.webp)

4. Click Push Configuration.

![Push configuration](/img/operations/mango-cloud-operations-guide/image48.webp)

Confirm the command completes with Success/Completed status in the device command history.

![Command status](/img/operations/mango-cloud-operations-guide/image10.webp)
