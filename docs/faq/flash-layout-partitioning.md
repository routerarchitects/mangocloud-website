---
slug: /faq/flash-layout-partitioning
title: Flash Layout & Partitioning
sidebar_label: Flash Layout & Partitioning
sidebar_position: 5
---

# Flash Layout & Partitioning

### How does a typical partition table for the NAND OpenWiFi AP look like?

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

### How does a typical partition table for NOR OpenWiFi access point look like?

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
