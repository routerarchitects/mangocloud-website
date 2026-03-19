---
slug: /operations/configuration-management-owgw/default-device-configurations
title: Default Device Configurations
---

## Use Case

When a device connects to OWGW, the system identifies its device type or model.

If the device is:

- connecting for the first time, or
- has been factory reset, and
- does not have a device-specific configuration assigned,

then OWGW automatically applies the default configuration associated with that device type.

## How to Add a Default Configuration

1. Log in to the OWGW UI.
2. From the left navigation menu, go to `Defaults -> Configurations`.

![Defaults - navigation](/img/operations/mango-cloud-operations-guide/image7.webp)

3. Click on **+(Create)** or the equivalent action.

![Defaults - create configuration](/img/operations/mango-cloud-operations-guide/image13.webp)

4. Enter a Configuration Name, for example `tplink_default_configuration`.
5. Select the appropriate Device Type.
6. Paste the required configuration JSON.
7. Click Save to apply the configuration.
8. Verify that the configuration appears in the `Defaults -> Configurations` list.


## Result

The default configuration is saved and becomes available for automatic application to matching device types.
