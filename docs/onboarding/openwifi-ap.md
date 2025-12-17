---
slug: /onboarding/openwifi-ap
title: OpenWiFi AP Onboarding
sidebar_position: 1
---

# Onboarding

OpenWiFi access points support two onboarding workflows, allowing flexibility for different deployment and manufacturing models. Both workflows ultimately result in the AP securely connecting to the cloud controller and downloading its default configuration.

## Overview of onboarding methods

1. **Installer-assisted onboarding (Maverick SSID)**
2. **Factory-provisioned self-onboarding**

Once an AP is connected to the cloud, it can be claimed and managed using the **self-onboarding mobile application**.

## Installer-assisted onboarding (Maverick SSID)

This method is used when device certificates and controller information are **not pre-installed during manufacturing**.

### When this workflow is triggered

- On first boot, or after a factory reset, if the AP is unable to communicate with the cloud controller.

### Step-by-step flow

1. **AP boots and enters provisioning mode**

   - The AP starts broadcasting a temporary SSID named Maverick, indicating the device is ready for local provisioning.

2. **Installer connects to the Maverick SSID**

   - Using a laptop or mobile device.
   - No prior cloud access is required.

3. **Provisioning files are uploaded**

   - The installer uploads:
     - The device certificate bundle.
     - A `gateway.json` file.
   - The `gateway.json` file contains the fully qualified domain name (FQDN) of the cloud controller.

4. **AP reboots**

   - Provisioning mode is disabled.
   - The AP attempts to connect to the cloud using the provided information.

5. **Cloud connection and configuration**

   - The AP establishes a secure connection to the cloud controller.
   - The cloud validates the device identity.
   - The AP downloads and applies its default configuration.

At this point, the AP is fully onboarded and operational.

## Factory-provisioned self-onboarding

This method is used when the correct certificate bundle is installed during manufacturing.

### When this workflow applies

- Device certificates and trust information are preloaded at the factory.
- No installer intervention is required at the site.

### Step-by-step flow

1. **Customer powers on the AP**

   - The AP is connected to the internet (WAN or uplink).
   - No local configuration is required.

2. **Automatic cloud connection**

   - The AP uses the pre-installed certificates.
   - It securely connects to the cloud controller.
   - Controller discovery is automatic.

3. **Default configuration download**

   - The cloud authenticates the device.
   - The AP downloads and applies its default configuration.

The device is now online and ready to be claimed by the subscriber.

## Claiming the device using the self-onboarding mobile app

Once the AP is connected to the cloud (via either method), it can be added to a user account.

### Claiming after the device is online

- The user opens the self-onboarding mobile application for signup.
- The user creates an account using email, device MAC, and operator ID.
- The system generates an automated verification email.
- The user uses this email to verify the account and set a password.
- The device has now been added to the subscriber’s account.
- The user can customize:
  - SSID names
  - Security settings
  - Network preferences
  - Other supported features

### Claiming before the device is powered on

The self-onboarding application also supports pre-claiming:

- The user adds the AP to their account using the MAC address.
- The device is associated with the subscriber account in advance.
- When the AP is powered on for the first time:
  - It connects to the cloud.
  - The cloud automatically applies the subscriber-specific configuration.

This enables true zero-touch installation.

## Key characteristics of the OpenWiFi onboarding process

- Supports both installer-driven and fully automated deployments.
- Self-signup process for the customer.
- Secure, certificate-based cloud connectivity.
- Flexible manufacturing and logistics models.
- Zero-touch experience for end users.

Same post-onboarding management experience regardless of onboarding path.
