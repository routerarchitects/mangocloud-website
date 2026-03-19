---
slug: /intro/getting-started
title: Getting Started
sidebar_position: 2
---

# Getting Started

Mango Cloud is the cloud control plane for networks built on the **OpenLAN ecosystem**. It provides centralized management for OpenWiFi Access Points, OpenLAN Switches, and OpenLAN Gateways, enabling operators to provision, configure, monitor, and maintain large numbers of network devices from a single platform.

Operating distributed networks, whether across thousands of homes or across enterprise sites, requires consistent configuration management, remote visibility, and reliable device lifecycle control. Mango Cloud addresses these challenges by providing a cloud-native platform that automates device onboarding, enforces network configuration policies, and collects telemetry from managed infrastructure.

The platform integrates with the OpenLAN device ecosystem to provide unified management of both **wireless and wired access networks**, allowing operators to manage gateways, switches, and access points through a single operational interface.

This guide introduces the basic concepts of Mango Cloud and explains how to begin working with the platform.

## <span style={{color: '#4f8a4f'}}>Who should use Mango Cloud</span>

Mango Cloud is designed for organizations that operate and manage large-scale
access networks built on OpenLAN technologies. It is particularly suited for
environments where centralized management, automation, and operational visibility
are required across distributed network infrastructure.

### Internet Service Providers and Broadband Operators

Service providers deploying residential WiFi networks often manage thousands of
gateways and access points distributed across subscriber homes. Mango Cloud
enables centralized provisioning, configuration management, firmware upgrades,
and operational monitoring for these devices, helping operators maintain consistent
service quality across large residential deployments.

### Enterprise IT Teams and Managed Service Providers

Enterprise networks typically consist of switches, gateways, and wireless access
points deployed across offices, campuses, and multi-site organizations. Mango
Cloud provides centralized visibility and operational control for these environments,
enabling administrators to manage configuration policies, monitor device health, and
maintain network infrastructure across multiple locations.

### Hospitality Networks

Hotels, resorts, and large hospitality venues rely heavily on reliable guest WiFi and
stable internal network infrastructure. These environments often include large
numbers of access points, gateways, and switches distributed across floors,
buildings, or campuses. Mango Cloud allows operators to centrally manage these
devices, maintain consistent network policies, and monitor performance across the
entire hospitality network.

### MDU Network Operators (Starting in Release 2.0)

Mango Cloud Release 2.0 introduces support for Multi-Dwelling Unit (MDU)
deployments such as apartment complexes, student housing, and residential
communities. This deployment model enables operators to manage shared network
infrastructure while maintaining network isolation and policy control across individual
tenants.

By supporting residential deployments, enterprise networks, and hospitality
environments, Mango Cloud enables operators to manage OpenLAN-based wired
and wireless infrastructure at scale through a unified cloud platform.

## <span style={{color: '#4f8a4f'}}>Prerequisites</span>

Before getting started with Mango Cloud, ensure that you have the required
environment and basic familiarity with the technologies used by the platform.

### Basic Networking Knowledge

Mango Cloud manages network infrastructure such as gateways, switches, and
wireless access points. Users should be familiar with basic networking concepts,
including:

- IP addressing and routing
- VLANs and network segmentation
- Wireless networking fundamentals
- Basic device provisioning workflows

A general understanding of these concepts will help you operate and troubleshoot
managed devices effectively.

### Infrastructure to Run Mango Cloud

Mango Cloud is deployed as a cloud-native application and requires infrastructure
capable of running containerized services.

Typical deployment environments include:

- A Linux server or cloud instance
- Container runtime such as Docker
- Kubernetes cluster for production deployments

Detailed deployment instructions and infrastructure requirements are provided in the
Deployment section of this documentation.

### OpenLAN Devices

To fully explore Mango Cloud functionality, access to supported OpenLAN devices
is recommended. These may include:

- OpenWiFi Access Points
- OpenLAN Switches
- OpenLAN Gateways

Devices connect to Mango Cloud to receive configuration, report telemetry, and allow
centralized management of the network.

### Network Connectivity

Devices managed by Mango Cloud must be able to communicate with the Mango
Cloud controller over the network. Ensure that:

- devices have IP connectivity to the controller
- required management ports are accessible
- DNS and routing are properly configured

Connectivity requirements may vary depending on the deployment environment.

After ensuring the prerequisites are met, proceed to the Deployment Guide to install
Mango Cloud and bring up the controller services.
