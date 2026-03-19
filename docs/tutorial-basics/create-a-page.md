---
slug: /architecture/system-architecture
title: System Architecture
sidebar_position: 1
---

# System Architecture

Mango Cloud provides the centralized control plane for networks built on the
**OpenLAN ecosystem**. It manages the lifecycle of network infrastructure devices,
including OpenWiFi Access Points, OpenLAN Switches, and OpenLAN Gateways.
The platform is designed as a **cloud-native system** composed of distributed
services that coordinate device provisioning, configuration management, monitoring,
and operational control across large-scale network deployments.
At a high level, the Mango Cloud architecture consists of three primary layers:

- Cloud Control Platform
- Device Management Layer
- Network Infrastructure Layer

These layers work together to enable scalable and automated network operations.

## Cloud Control Platform

The Cloud Control Platform is the central management layer of Mango Cloud. It runs
in a cloud or data center environment and provides the operational interface used by
network administrators.

This layer is responsible for:

- device provisioning and onboarding
- configuration management and policy enforcement
- telemetry collection and monitoring
- device lifecycle management
- API-based integrations with external systems

The platform exposes both a **web-based user interface** and **API endpoints** that
allow operators and automation systems to manage network infrastructure.
The cloud platform is designed using a microservice architecture that enables
horizontal scalability and fault tolerance.

## Device Management Layer

The device management layer acts as the communication bridge between Mango
Cloud and the OpenLAN devices deployed in the network.
When devices are powered on and connected to the network, they establish
communication with the Mango Cloud controller. Through this connection, the
platform can:

- authenticate and register devices
- deliver configuration policies
- collect operational telemetry
- execute management actions such as configuration updates or firmware
  upgrades

This layer ensures that device configuration and operational state remain
synchronized with the policies defined in the cloud platform.

## Network Infrastructure Layer

The network infrastructure layer consists of the OpenLAN devices deployed in the
physical network.
These devices include:

### OpenLAN Gateways

Gateways provide WAN connectivity, routing, security functions, and act as the edge
of the managed network.

### OpenLAN Switches

Switches provide wired network connectivity and enable network segmentation and
traffic management within the local infrastructure.

### OpenWiFi Access Points

Access points provide wireless connectivity for client devices and integrate with the
OpenLAN network infrastructure.
Together, these devices form the managed network environment that Mango Cloud
monitors and controls.

## Operational Workflow

In a typical deployment, Mango Cloud operates using the following workflow:

1. A device boots and connects to the network.
2. The device establishes communication with the Mango Cloud controller.
3. The controller authenticates and registers the device.
4. Configuration policies are applied to the device.
5. The device continuously reports telemetry and operational status to the
   platform.

This workflow allows operators to maintain centralized control over distributed
network infrastructure while ensuring that configuration and operational state remain
consistent across all managed devices.

## Scalability and Deployment Environments

Mango Cloud is designed to manage network infrastructure across distributed
environments and large device fleets. Its cloud-native architecture allows operators
to centrally manage networks deployed across multiple sites and operational
domains.
Typical deployment environments include:

### Residential Broadband Networks

Internet service providers can manage large fleets of home gateways and WiFi
access points deployed across subscriber homes. Mango Cloud provides centralized
provisioning, configuration management, firmware lifecycle control, and telemetry
collection for these devices.

### Enterprise LAN Networks

Enterprise IT teams and managed service providers can use Mango Cloud to
manage switches, gateways, and access points deployed across offices, campuses,
and distributed enterprise environments.

### Hospitality Networks

Hotels, resorts, and hospitality venues often operate large wireless networks
spanning multiple floors and buildings. Mango Cloud enables centralized
management of guest WiFi infrastructure and network devices across these
deployments.

### Multi-Dwelling Unit (MDU) Networks

Starting with **Mango Cloud Release 2.0**, the platform will support MDU deployments
such as apartment complexes, student housing, and residential communities where
shared network infrastructure serves multiple tenants. This deployment model allows
operators to manage network infrastructure while maintaining isolation and policy
control across individual units.
