---
slug: /operations/provisioning-hierarchy-owprov/operators
title: Operators
---

Operators are used to manage multi-tenant environments by separating customers or organizational units.

## Use Cases

- Create isolated tenants for different customers or teams.
- Organize Entities, Venues, Subscribers, and devices under the correct Operator.
- Control user access by assigning users to specific Operators.

## Create an Operator

1. Log in to OWPROV UI at `https://<DOMAIN_NAME>:8443`.
2. From the left menu, navigate to `Operators`.
3. Click `+` (Add).

![Operators navigation](/img/operations/mango-cloud-operations-guide/image15.webp)

4. Enter the required details:
- Operator Name
- Registration ID
5. Click **Save**.

![Operator details form](/img/operations/mango-cloud-operations-guide/image26.webp)

6. Verify that the new Operator appears in the Operators list.

![Operators list](/img/operations/mango-cloud-operations-guide/image28.webp)

## Result

- The Operator is successfully created.
- An Entity is automatically created and associated with the Operator.
- You can now create Subscribers and devices under this Operator.
