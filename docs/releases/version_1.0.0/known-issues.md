---
slug: /releases/version_1.0.0/known-issues
title: Known Issues
---

The following issues are identified in this release and may impact usability or expected behavior.

#### Device Group required error when editing OLG device added via mobile app
- When an OLG device is added through the mobile app and later edited via the UI, the system displays a “Device Group” required error

#### Manual page refresh required after add or delete operations
- A manual page refresh is required after adding or deleting a subscriber, device, or operator
- Updated information does not appear automatically in the UI

#### Operator name character limit mismatch
- Operator name is restricted to a maximum of 32 characters
- Error message incorrectly states: "Name must be less than 50 characters long"

#### Configuration request fails when another command is already in progress
- If a device is executing a command (e.g., WiFi Scan), new configuration requests are rejected
- Error shown: "Device is already executing a command. Please try later"

#### Device entry created even when Add Device operation fails
- If Add Device fails due to an ongoing command, the device still appears in the subscriber’s device list
- No configuration is actually applied to the device in this case
