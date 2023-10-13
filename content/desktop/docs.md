---
title: Docs for Testcontainers Desktop
showTitle: true
showToc: true
submenu: desktop
---
## Overview
[Testcontainers Desktop](/desktop/) is a companion app for the [open source Testcontainers libraries](/) that makes local development and testing with real dependencies simple. It's a closed-source app available on macOS, Windows, and Linux, that includes a [free plan](/cloud/pricing/) for individual developers. It's lightweight and runs in your system tray, so you can remain in your IDE while developing.

![Testcontainers Desktop overview](../images/tcd_overview.png)

Open source Testcontainers libraries must remain self-sufficient to write and run tests, from desktop to CI. Testcontainers Desktop, as an optional desktop-only app, focuses on improving the developer experience. The features of Testcontainers Desktop are broken down into three main categories:

1. Select a container runtime
2. Debug Testcontainers-based services
3. Track and analyze test sessions

## Installation and sign-in

### Install Testcontainers Desktop

Go to the [download page](/desktop/), select your OS-specific distribution, and install it.

Alternatively, if you use macOS, you can install the app via [Homebrew](https://brew.sh/): 

```
brew install atomicjar/tap/testcontainers-desktop
```

### Create a free account or sign in

The first time Testcontainers Desktop starts it asks you to create a free account at [app.testcontainers.cloud](https://app.testcontainers.cloud/). If you already have an account, you should sign in instead. If you'd like to join a colleague's organization, you can ask them to invite you from the [members page](https://app.testcontainers.cloud/dashboard/members). Unauthenticated usage is not supported at this time. 

## User guide

### 1. Select a container runtime
Open source Testcontainers libraries rely on a container runtime compatible with the Docker API. The following container runtime environments are officially supported:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Docker Engine](https://docs.docker.com/engine/install/) on Linux
* [Testcontainers Cloud](https://testcontainers.com/cloud/)
* Testcontainer Desktop's [embedded runtime](https://newsletter.testcontainers.com/announcements/adopt-testcontainers-desktop-as-your-container-runtime-early-access) (macOS only)

Refer to [this page](https://java.testcontainers.org/supported_docker_environment/) for more extensive information on supported container runtime environments, as well as known limitations of 
alternative container runtime environments.

#### Switch between local runtimes

![Testcontainers Desktop local runtime selection](../images/tcd_local_runtime.png)

Testcontainers Desktop lets you switch between local container runtimes. This is particularly useful if you're trying to adopt an OSS runtime such as podman or colima, or are looking to locate and clean up old runtimes that are interfering with your tests.

#### Enable Testcontainers Desktop's embedded runtime (beta)

![Testcontainers Desktop embedded runtime](../images/tcd_local_runtime.png)

Testcontainers Desktop aims to deliver a batteries-included developer experience for local development and testing. As of version `1.4.18` Testcontainers Desktop embeds a lightweight and fast runtime, optimized for Testcontainers usage. The embedded runtime is currently in beta, and only available on macOS 13.3 or later to benefit from Apple's native Virtualization Framework. It is available as the top option for local runtimes. 

The runtime takes a few seconds to initialize the first time you run a command, displaying "Embedded Runtime (Starting...)" in the menu. The menu changes to "Embedded Runtime (Started)" and the icon displays a "play" icon when ready. If you run into any issues, join us in the [#testcontainers-desktop](https://testcontainers.slack.com/archives/C05JGR9CSQY) channel of the [public slack](https://slack.testcontainers.org/) to troubleshoot.

#### Run with Testcontainers Cloud

![Testcontainers Desktop cloud runtime](../images/tcd_cloud_runtime.png)

Testcontainers Desktop provides seamless access to Testcontainers Cloud to run containers in the cloud on demand, without consuming local resources or requiring a local docker daemon. Besides sparing CPU and RAM, running containers in the cloud provides a consistent Linux x86 architecture, just like in production, regardless of what operating system developers use for local development (e.g. macOS with ARM CPU, Windows with WSL, etc.).

The [free plan](https://testcontainers.com/cloud/pricing/) for individual developers includes a free monthly quota of 300 minutes of cloud runtime. Paid plans are available to users who need to lift this restriction. See [this knowledge article](https://knowledge.testcontainers.cloud/usage-and-billing) for details on usage metering and billing.

To switch to the cloud runtime, select "Run with Testcontainers Cloud" in the menu. Once selected, the menu displays "Testcontainers Cloud" as confirmation. When Testcontainers libraries run containers, a cloud worker is allocated dynamically and the icon changes to display the "play" icon. Testcontainers Desktop supports parallelizing test execution across multiple workers via [Turbo mode](https://knowledge.testcontainers.cloud/turbo-mode), which requires a paid account. 

The "Connected" sub-menu containers useful troubleshooting information, including the worker-id and associated latency, and also confirmation of whether the self-check was successful, potentially identifying any connectivity issues. See the [knowledge base](https://knowledge.testcontainers.cloud/testcontainers-cloud-for-desktop) for further troubleshooting information.

![Testcontainers Desktop cloud diagnosis menu](../images/tcd_cloud_connected_menu.png)

#### Use the app's docker context

Testcontainers Desktop detects local runtimes based on existing [docker contexts](https://docs.docker.com/engine/context/working-with-contexts/). Testcontainers Desktop does not automatically switch docker context for you; instead the app creates a context called `tcc` or `tcd` that links dynamically to the selected runtime. For example, the following commands run `docker ps` through Testcontainers Desktop, ensuring that it works regardless of the selected local or cloud runtime.

```bash
docker context list
docker context use tcc
docker ps
```

![Testcontainers Desktop docker contexts](../images/tcd_docker_contexts.png)

### 2. Debug Testcontainers-based services

#### Set fixed ports to easily debug development services

TODO: https://newsletter.testcontainers.com/announcements/set-fixed-ports-to-easily-debug-development-services

TODO: https://newsletter.testcontainers.com/announcements/verify-running-services-and-spot-configuration-issues

TODO: https://newsletter.testcontainers.com/announcements/get-started-with-popular-technologies-thanks-to-preconfigured-services

#### Freeze containers to prevent their shutdown while you debug

TODO: https://newsletter.testcontainers.com/announcements/freeze-containers-to-prevent-their-shutdown-while-you-debug

#### Terminate containers

TODO: https://newsletter.testcontainers.com/announcements/clean-up-containers-without-manual-docker-commands

#### Enable reusable containers

TODO: https://newsletter.testcontainers.com/announcements/enable-reusable-containers-with-a-single-click

### 3. Track and analyze test sessions

TODO: https://newsletter.testcontainers.com/announcements/inspect-local-test-sessions-in-collaborative-dashboards

## Account management and preferences



## Troubleshooting

If you experience unexpected behavior with Testcontainers Desktop, there are a few common issues you can investigate and this guide may help resolve issues quickly. If you continue to have trouble, reach out to AtomicJar support for further assistance.

TODO:

* Prerequisites
* Reading logs
* Contacting support
* Joining slack