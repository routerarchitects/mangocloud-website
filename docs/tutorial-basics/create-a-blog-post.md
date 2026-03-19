---
slug: /architecture/services-overview
title: Services Overview
sidebar_position: 2
---

# Services Overview

Mango Cloud is composed of a set of cooperating services that together provide
centralized management for OpenLAN network infrastructure. Each service performs
a specific function within the platform, enabling scalable device management,
network monitoring, and operational control.
These services work together to support device provisioning, configuration
management, telemetry processing, analytics, and user access across residential,
enterprise, hospitality, and future MDU deployments.

![Services Overview Diagram](/img/services_overview.png "Services Overview")



## Gateway Service

The Gateway Service manages communication between Mango Cloud and
OpenLAN Gateway devices. It handles device registration, operational messaging,
configuration delivery, and command execution for gateways deployed in the
network.
This service ensures that gateways remain synchronized with the configuration
policies defined in the cloud platform.

## Firmware Service

The Firmware Service manages firmware images for supported OpenLAN devices. It
allows operators to upload, store, and distribute firmware updates to gateways,
switches, and access points.
The service coordinates firmware lifecycle operations including version tracking,
upgrade scheduling, and deployment across device fleets.

## Provisioning Service

The Provisioning Service manages device onboarding and network hierarchy within
the Mango Cloud platform. It enables operators to register devices, organize them
into logical structures such as organizations, sites, or locations, and assign
configuration policies during the onboarding process.
This service provides the foundation for large-scale device management across
distributed deployments.

## Provisioning UI

The Provisioning UI provides a web interface for device onboarding and network
hierarchy management. Through this interface, administrators can register new
devices, organize them within deployment structures, and manage provisioning
workflows.
It simplifies the operational process of bringing new infrastructure into the Mango
Cloud environment.

## Gateway UI

The Gateway UI provides a management interface specifically focused on gateway
operations. Administrators can view gateway status, manage configuration settings,
monitor operational data, and perform administrative actions related to gateway
devices.

## Kafka Messaging Service

Kafka acts as the messaging backbone of Mango Cloud. It enables reliable,
asynchronous communication between platform services and supports the flow of
operational events and telemetry data throughout the system.
By decoupling services through messaging, Kafka allows the platform to scale
efficiently while maintaining system resilience.

## Topology Service

The Topology Service maintains a representation of the network structure and
relationships between managed devices. It helps visualize how gateways, switches,
and access points are connected within the network infrastructure.
This information supports network monitoring, troubleshooting, and operational
visibility.

## Analytics Service

The Analytics Service processes telemetry and operational data collected from
managed devices. It enables analysis of network performance, device health, and
operational trends across deployments.
The service helps operators gain insights into network behavior and supports data-
driven decision making.

## User Portal Service

The User Portal Service provides an interface for end users or tenants to access
network services managed by Mango Cloud. Depending on the deployment model, it
can be used for authentication, network access management, or user-facing service
interactions.
This service is particularly relevant in hospitality, enterprise, and future MDU
environments where end-user access management is required.

## Security Service

The Security Service manages authentication, authorization, and access control
across the Mango Cloud platform. It ensures that only authorized users and services
can access platform resources and perform management actions.
The service enforces security policies and protects the integrity of the management
platform.
