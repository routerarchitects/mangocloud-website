---
id: faq
slug: /faq/faq
title: FAQ
sidebar_position: 1
---

import RouterArchitectsLink from '@site/src/components/RouterArchitectsLink';

# FAQ

## Is MangoCloud open-source?

Yes. Source code lives under the <RouterArchitectsLink /> GitHub organization with an open license and CLA requirement.

## Which hardware is supported?

All OpenWiFi compliant Access Points, OpenLAN Switches, and OpenLAN Gateways (OLGs) listed in the [Supported Devices](/docs/hardware/supported-devices) document.

## How do I report security issues?

Email support@routerarchitects.com with encrypted details. Do not file public issues.

## Does MangoCloud scale to large deployments?

Yes. The controller is multi-tenant and horizontally scalable; see the [Deployment](/docs/deployment/kubernetes) guidance.

## How can I contribute documentation?

Follow the [Contributing guide](/docs/contributing/contributing) and submit pull requests with clear commit history.

## How is Mango Cloud related to the openLAN project?

Mango Cloud is built on the OpenWiFi Cloud SDK and serves as the cloud management platform for all openLAN-compliant devices. It provisions, configures, and monitors OpenWiFi access points, openLAN switches, and openLAN gateways through a unified cloud control plane.

By leveraging the OpenWiFi Cloud SDK, Mango Cloud provides consistent onboarding, policy management, telemetry, and multi-tenant operations across wired and wireless openLAN infrastructure.

**What Mango Cloud is not:**  
&nbsp;&nbsp;&nbsp;&nbsp;To set expectations clearly:

- Mango Cloud is not embedded in the switch hardware.
- openLAN can, in principle, be adapted to other controllers.
- Mango Cloud does not replace traditional data-center switch controllers.
- Its focus is access-layer LAN and Wi-Fi operations, not core switching.


## What information does an ISP/MSP need to provide to the ODM for OpenWiFi device manufacturing?

The ISP/MSP typically provides the ODM with:

- the flash partition layout specification (partition names, sizes, and order)
- the final OpenWiFi production firmware image to be flashed during manufacturing
- the device identity and security provisioning model (for example, per-device keypair generation and certificate workflow)
- any required manufacturing metadata formats, such as serial number structure and MAC address allocation

ODM partners use their own factory bootloader and recovery environment to flash the firmware and provision each device identity according to the agreed specifications.

## Does the ISP/MSP need to provide the list of MAC addresses and serial numbers to the ODM during manufacturing?

Not usually. In most manufacturing setups, the ODM generates and programs MAC addresses and serial numbers during production and then provides the ISP/MSP with a batch report containing the assigned values. The ISP/MSP may provide formatting rules or ranges (for example, serial number structure or approved MAC OUIs), but does not typically supply a per-device list in advance unless required by internal inventory or regulatory processes.

## What is the minimum RAM and flash required to run an OpenWiFi image?

At a minimum, an OpenWiFi access point requires 256 MB of RAM and 16 MB of flash, though 512 MB RAM and 32 MB flash is strongly recommended for production deployments to support stability, telemetry, and future feature growth.

## What are the different ways certificates can be shared with an ODM during manufacturing?

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

## How does a typical partition table for the NAND OpenWiFi AP look like?

NAND devices use fixed boot partitions followed by a single large UBI container that holds the kernel, root filesystem, persistent data, and certificates as separate logical volumes.

| Partition | Size | Purpose |
| --- | --- | --- |
| mtd0 | 512 KB | SBL1 bootloader stage |
| mtd1 | 512 KB | MIBIB partition metadata |
| mtd2 | 256 KB | BOOTCONFIG boot configuration |
| mtd3 | 1 MB | QSEE secure firmware |
| mtd4 | 256 KB | DEVCFG device configuration |
| mtd5 | 256 KB | CDT chip/device data |
| mtd6 | 512 KB | APPSBLENV U-Boot environment |
| mtd7 | 1.5 MB | APPSBL U-Boot |
| mtd8 | 1 MB | ART RF calibration (protected) |
| mtd9 | ~120 MB | UBI firmware container |

UBI volumes inside `mtd9` typically include:

- `kernel` – Linux kernel
- `rootfs` – Read-only root filesystem
- `rootfs_data` – Writable overlay
- `certificates` – Device certificates and keys

## How does a typical partition table for NOR OpenWiFi access point look like?

NOR-flash OpenWiFi access points use a flat, fixed MTD layout (no UBI) because NOR flash supports direct random access and does not suffer from bad blocks. This layout is common across OpenWrt/OpenWiFi devices.

Flash details: 32 MB SPI-NOR with 64 KB erase blocks.

| Partition | Size | Purpose |
| --- | --- | --- |
| mtd0 | 512 KB | u-boot bootloader |
| mtd1 | 256 KB | u-boot-env U-Boot environment |
| mtd2 | 256 KB | art RF calibration (protected) |
| mtd3 | 20 MB | firmware (kernel + squashfs rootfs) |
| mtd4 | 10 MB | rootfs_data writable overlay |
| mtd5 | ~1 MB | certificates device identity |

**Boot and firmware**

- `u-boot` and `u-boot-env` are read by the bootloader at power-on.
- `firmware` is a combined image containing:
  - Linux kernel
  - SquashFS root filesystem
- U-Boot boots directly from this partition.

**Filesystems**

- Root filesystem: SquashFS (read-only, inside firmware)
- Overlay: JFFS2 or F2FS on `rootfs_data`
- Certificates: Stored in a dedicated partition to survive upgrades and resets
