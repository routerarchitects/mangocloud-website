---
id: onboarding-add-openwifi-aps
slug: /onboarding/add-openwifi-aps
title: Add OpenWiFi APs
sidebar_position: 1
---

# Add OpenWiFi APs

Follow this process to onboard Access Points into MangoCloud.

## Prepare the Device

1. Flash the latest OpenWiFi firmware.
2. Set the redirector to the MangoCloud controller URL.
3. Collect the device serial number, firmware version, and site details.

## Onboarding Steps

1. Navigate to **Devices → Add Device** in the UI or use the onboarding API.
2. Provide device identifiers and assign a site plus tenant.
3. Wait for the device to connect; MangoCloud will push default policies and firmware checks.

## Verification

- Confirm heartbeats under **Telemetry → Live Feed**.
- Review applied configuration in the device detail drawer.
- Schedule firmware compliance checks for the new fleet.
