---
slug: /operations/provisioning-hierarchy-owprov/provisioning-workflow-end-to-end
title: Provisioning Workflow (End-to-End)
---

1. Log in to OWPROV-UI: `https://<DOMAIN_NAME>:8443`.
   ![OWPROV login](/img/operations/mango-cloud-operations-guide/image27.webp)
2. Default credentials (if unchanged): `tip@ucentral.com` / `openwifi`.
3. Ensure the device exists in Inventory. If missing, add it.
   ![Inventory device check](/img/operations/mango-cloud-operations-guide/image18.webp)
4. Create or confirm Entity and Venue.
   ![Create Entity](/img/operations/mango-cloud-operations-guide/image39.webp)
   ![Create Venue](/img/operations/mango-cloud-operations-guide/image14.webp)
5. Add configuration templates:
   - Entity-level for global defaults.
   - Venue-level for site-specific overrides.
   ![Add configuration at Entity level](/img/operations/mango-cloud-operations-guide/image16.webp)
   ![Add configuration at Venue level](/img/operations/mango-cloud-operations-guide/image34.webp)
6. Assign the device to the correct Entity/Venue.
7. Add device-specific overrides in the device details page.
   ![Device-specific overrides](/img/operations/mango-cloud-operations-guide/image40.webp)
   ![Device configuration details](/img/operations/mango-cloud-operations-guide/image29.webp)
8. Save the configuration for the device.
9. Open the device details page and check Computed Configuration.
   ![Computed configuration](/img/operations/mango-cloud-operations-guide/image9.webp)
10. Click Push Configuration.
   ![Push configuration](/img/operations/mango-cloud-operations-guide/image17.webp)
11. Verify the configuration status shows Success/Completed.
    ![Configuration push status](/img/operations/mango-cloud-operations-guide/image55.webp)
    ![Provisioning success](/img/operations/mango-cloud-operations-guide/image11.webp)
