---
slug: /releases/version_1.0.0/features
title: Features
---

This release introduces core platform capabilities for managing operators, subscribers, and devices, along with improved user experience and monitoring support.

## Operator Management

### Create Operator
- When an operator is created, the backend automatically:
  - Creates a default entity
  - Associates the operator with that entity

### Delete Operator
- Deleting an operator will:
  - Automatically remove the associated entity created by the backend

---

## Subscriber Management

### Add Subscriber
- When a subscriber is created, the backend automatically:
  - Creates a default venue
  - Associates the subscriber with that venue

### Delete Subscriber
- Deleting a subscriber will:
  - Automatically remove the associated venue created by the backend

---

## Device Management

### Add Subscriber Device
Subscriber device onboarding supports both gateway and mesh device management:

- The **first device** added for a subscriber is treated as the **gateway device**
- All subsequent devices are treated as **mesh devices (Access Points)**
- Each subscriber can have **only one gateway device**

#### Device Constraints
- A gateway device **cannot be deleted** until all associated mesh devices are removed

#### Monitoring Behavior
- Monitoring is **automatically enabled** when a gateway device is added
- Monitoring can be **started or stopped** from the OWPROV UI

---

### Delete Subscriber Device
- Devices must be deleted based on hierarchy:
  - All mesh devices must be removed before deleting the gateway device

---

## Account Verification

### Email Verification
- Email verification is supported during subscriber onboarding and account validation

### Resend Email Verification Link
- Subscribers can request a new verification link if:
  - The email was not received
  - The link has expired

---

## UI Enhancements

### Enhanced OWGW UI
- Improved user experience for:
  - Device configuration
  - Device management workflows
