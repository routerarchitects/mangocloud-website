---
slug: /operations/device-onboarding/connecting-devices-to-controller
title: Connecting Devices to Controller
---

Start uCentral:

```bash
/etc/init.d/ucentral start
```

If you updated `gateway.json`, restart:

```bash
/etc/init.d/ucentral restart
```

On the device, check uCentral logs:

```bash
logread | grep -i ucentral
```

On the controller, open the UI and confirm the device appears Online/Connected.
