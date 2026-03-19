---
slug: /operations/provisioning-hierarchy-owprov/subscribers
title: Subscribers
---

Subscribers represent end users who access the system via the User Portal or mobile application. Devices are assigned to subscribers for ownership and subscriber-level configuration.

## Use Cases

- Create end-user accounts for application access
- Assign devices to a subscriber
- Apply subscriber-specific settings while inheriting `Entity -> Venue` configurations

## Create a Subscriber

### Prerequisite

An Operator must already exist (with its associated Entity)

### Step 1: Open Operator

1. Log in to OWPROV UI  
   `https://<DOMAIN_NAME>:8443`
2. Navigate to `Operators` from the left menu
3. Select the target Operator (for example, `Airtel`)

![Subscriber navigation](/img/operations/mango-cloud-operations-guide/image31.webp)

### Step 2: Open Subscribers Section

1. Go to the `Subscribers` tab next to `Devices`
2. If no subscribers exist, you will see `No Subscribers Found`
3. Click `+` (`Create`)

![Create subscriber](/img/operations/mango-cloud-operations-guide/image59.webp)

### Step 3: Enter Subscriber Details

In the `Create Subscriber` popup:

1. Enter `Email Address` (for example, `example@gmail.com`)
2. Click `Save`

![Subscriber details form](/img/operations/mango-cloud-operations-guide/image57.webp)

### Step 4: Verify Subscriber Creation

1. The Subscriber appears in the Subscribers list under the selected Operator
2. A Venue is automatically created and associated with the Subscriber's Entity

![Subscribers list](/img/operations/mango-cloud-operations-guide/image5.webp)

### Step 5: Email Verification

After creation:

1. A verification email is sent to the subscriber
2. The subscriber must:
   - Open the verification link
   - Set a password
   - Log in to the mobile app using their email and password

### Step 6: Resend Verification Email (Optional)

If the verification email is not received:

1. Click `Resend` from the Subscriber page

![Subscribers list](/img/operations/mango-cloud-operations-guide/image27.webp)

## Result

- Subscriber account is created successfully
- A dedicated Venue is automatically created under the Subscriber's Entity
- Subscriber can log in and manage assigned devices
