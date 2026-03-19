---
slug: /operations/provisioning-hierarchy-owprov/adding-devices-to-venues
title: Add Devices to a Venue
---

Devices must be assigned to a Venue to receive the correct configuration through the `Entity -> Venue -> Subscriber` hierarchy.

## Use Cases

- Organize devices by Venue for easier management (inventory, provisioning, monitoring)
- Automatically apply Venue-level configurations
- Ensure devices receive the correct inherited settings

## Add a Device to a Venue

### Prerequisites

- The target Entity and Venue must already exist
- The device should not already be assigned to another Venue

### Step 1: Select Venue

1. Log in to OWPROV UI  
   `https://<DOMAIN_NAME>:8443`
2. Navigate to `Entities`
3. Select the target Entity
4. Open the required Venue

![Venue inventory create](/img/operations/mango-cloud-operations-guide/image12.webp)

### Step 2: Open Venue Inventory

1. Go to the `Inventory` section within the Venue
2. Click `+` (`Create`)

![Save device to venue](/img/operations/mango-cloud-operations-guide/image19.webp)

### Step 3: Enter Device Details

Provide the required device information:

- Serial Number:
- Device Name:
- Device Type:

Click **Save**

![Venue device list](/img/operations/mango-cloud-operations-guide/image54.webp)

### Step 4: Verify Device Assignment

1. The device appears in the Venue device(Inventory) list
2. The device is now linked to the selected Venue

## Result

- The device is successfully assigned to the Venue
- It automatically inherits configuration from:
  - Entity level
  - Venue level
- The device is ready for provisioning and management
