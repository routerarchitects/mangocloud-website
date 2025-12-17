---
id: faq-manufacturing-odm
slug: /faq/manufacturing-odm
title: Manufacturing & ODM Integration
sidebar_label: Manufacturing & ODM Integration
sidebar_position: 3
---

# Manufacturing & ODM Integration

### What information does an ISP/MSP need to provide to the ODM for OpenWiFi device manufacturing?

The ISP/MSP typically provides the ODM with:

- the flash partition layout specification (partition names, sizes, and order)
- the final OpenWiFi production firmware image to be flashed during manufacturing
- the device identity and security provisioning model (for example, per-device keypair generation and certificate workflow)
- any required manufacturing metadata formats, such as serial number structure and MAC address allocation

ODM partners use their own factory bootloader and recovery environment to flash the firmware and provision each device identity according to the agreed specifications.

### Does the ISP/MSP need to provide the list of MAC addresses and serial numbers to the ODM during manufacturing?

Not usually. In most manufacturing setups, the ODM generates and programs MAC addresses and serial numbers during production and then provides the ISP/MSP with a batch report containing the assigned values. The ISP/MSP may provide formatting rules or ranges (for example, serial number structure or approved MAC OUIs), but does not typically supply a per-device list in advance unless required by internal inventory or regulatory processes.

### What are the different ways certificates can be shared with an ODM during manufacturing?

Certificates can be shared with an ODM in several different models, depending on who controls private keys and where signing happens.

**No certificate sharing (per-device keys, customer-side signing)**

- Most secure model.
- ODM generates a unique keypair on-device for every unit.
- ODM sends a CSR and device metadata back to the ISP/MSP for signing.
- ISP/MSP signs the CSR with its CA and returns the signed certificate.
- Signed device certificate is returned to the ODM for injection.
- ODM never receives any CA private keys, minimizing exposure.

**Manufacturing-only intermediate CA shared with ODM**

ISP/MSP provides an intermediate CA certificate and its manufacturing-only private key. ODM generates per-device key pairs and signs the certificates on the factory line, while the root CA private key is never shared.

**ODM-generated certificates using ODM CA**

ODM generates per-device key pairs and signs certificates with its own factory CA. The ISP/MSP imports the ODM CA certificate into the OpenWiFi controller, and no ISP/MSP private keys are shared.

**Pre-generated per-device certificates provided to ODM**

ISP/MSP pre-generates device certificates and corresponding private keys, which are then delivered to the ODM for injection during manufacturing. This requires careful handling of the private keys during transport and storage.

| Method | Security | ODM Key Access | Recommended |
| --- | --- | --- | --- |
| ISP-signed CSRs | Very High | No | ✅ Yes |
| Manufacturing intermediate CA | High | Yes (limited) | ✅ Yes |
| ODM CA trusted by controller | High | ODM only | ✅ Yes |
| Pre-generated per-device certs | Medium | Yes | ⚠️ Conditional |
