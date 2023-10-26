---
title: Docs for Testcontainers Desktop
showTitle: true
showToc: true
submenu: desktop
---
## Overview
[Testcontainers Desktop](/desktop/) is a companion app for the [open source Testcontainers libraries](/) that makes local development and testing with real dependencies simple. It's a closed-source app available on macOS, Windows, and Linux, that includes a [free plan](/cloud/pricing/) for individual developers. It's lightweight and runs in your system tray, so you can remain in your IDE while developing.

{{<screenshot fixedheight>}}![Testcontainers Desktop overview](../images/tcd_overview.png){{</screenshot>}}

Open source Testcontainers libraries must remain self-sufficient to write and run tests, from desktop to CI. Testcontainers Desktop, as an optional desktop-only app, focuses on improving the developer experience. The features of Testcontainers Desktop are broken down into four main categories:

1. Select a container runtime
2. Debug Testcontainers-based services
3. Manage the lifecycle of containers
4. Track and analyze test sessions

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

### Select a container runtime
Open source Testcontainers libraries rely on a container runtime compatible with the Docker API. The following container runtime environments are officially supported:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Docker Engine](https://docs.docker.com/engine/install/) on Linux
* [Testcontainers Cloud](https://testcontainers.com/cloud/)
* Testcontainer Desktop's [embedded runtime](https://newsletter.testcontainers.com/announcements/adopt-testcontainers-desktop-as-your-container-runtime-early-access) (macOS only)

Refer to [this page](https://java.testcontainers.org/supported_docker_environment/) for more extensive information on supported container runtime environments, as well as known limitations of 
alternative container runtime environments.

#### Switch between local runtimes

{{<screenshot>}}![Testcontainers Desktop local runtime selection](../images/tcd_local_runtime.png){{</screenshot>}}

Testcontainers Desktop lets you switch between local container runtimes. This is particularly useful if you're trying to adopt an OSS runtime such as podman or colima, or are looking to locate and clean up old runtimes that are interfering with your tests.

#### Enable Testcontainers Desktop's embedded runtime (beta)

{{<screenshot>}}![Testcontainers Desktop embedded runtime](../images/tcd_local_runtime.png){{</screenshot>}}

Testcontainers Desktop aims to deliver a batteries-included developer experience for local development and testing. As of version `1.4.18` Testcontainers Desktop embeds a lightweight and fast runtime, optimized for Testcontainers usage. The embedded runtime is currently in beta, and only available on macOS 13.3 or later to benefit from Apple's native Virtualization Framework. It is available as the top option for local runtimes. 

The runtime takes a few seconds to initialize the first time you run a command, displaying "Embedded Runtime (Starting...)" in the menu. The menu changes to "Embedded Runtime (Started)" and the icon displays a "play" icon when ready. If you run into any issues, join us in the [#testcontainers-desktop](https://testcontainers.slack.com/archives/C05JGR9CSQY) channel of the [public slack](https://slack.testcontainers.org/) to troubleshoot.

#### Run with Testcontainers Cloud

{{<screenshot fixedheight>}}![Testcontainers Desktop cloud runtime](../images/tcd_cloud_runtime.png){{</screenshot>}}

Testcontainers Desktop provides seamless access to Testcontainers Cloud to run containers in the cloud on demand, without consuming local resources or requiring a local docker daemon. Besides sparing CPU and RAM, running containers in the cloud provides a consistent Linux x86 architecture, just like in production, regardless of what operating system developers use for local development (e.g. macOS with ARM CPU, Windows with WSL, etc.).

The [free plan](https://testcontainers.com/cloud/pricing/) for individual developers includes a free monthly quota of 300 minutes of cloud runtime. Paid plans are available to users who need to lift this restriction. See [this knowledge article](https://knowledge.testcontainers.cloud/usage-and-billing) for details on usage metering and billing.

To switch to the cloud runtime, select "Run with Testcontainers Cloud" in the menu. Once selected, the menu displays "Testcontainers Cloud" as confirmation. When Testcontainers libraries run containers, a cloud worker is allocated dynamically and the icon changes to display the "play" icon. Testcontainers Desktop supports parallelizing test execution across multiple workers via [Turbo mode](https://knowledge.testcontainers.cloud/turbo-mode), which requires a paid account. 

The "Connected" sub-menu containers useful troubleshooting information, including the worker-id and associated latency, and also confirmation of whether the self-check was successful, potentially identifying any connectivity issues. See the [knowledge base](https://knowledge.testcontainers.cloud/testcontainers-cloud-for-desktop) for further troubleshooting information.

{{<screenshot>}}![Testcontainers Desktop cloud diagnosis menu](../images/tcd_cloud_connected_menu.png){{</screenshot>}}

#### Use the app's docker context

Testcontainers Desktop detects local runtimes based on existing [docker contexts](https://docs.docker.com/engine/context/working-with-contexts/). Testcontainers Desktop does not automatically switch docker context for you; instead the app creates a context called `tcc` or `tcd` that links dynamically to the selected runtime. For example, the following commands run `docker ps` through Testcontainers Desktop, ensuring that it works regardless of the selected local or cloud runtime.

```bash
docker context list
docker context use tcc
docker ps
```

{{<screenshot nowrapper>}}![Testcontainers Desktop docker contexts](../images/tcd_docker_contexts.png){{</screenshot>}}

### Debug Testcontainers-based services

#### Set fixed ports to easily debug development services

{{<screenshot fixedheight>}}![Testcontainers Desktop services](../images/tcd_services.png){{</screenshot>}}

Testcontainers libraries dynamically map the container’s ports onto random ports on the host machine to avoid conflicts, ensuring that automated tests run reliably. However, during development it can be cumbersome to check which random port is assigned on the host to connect local debugging tools such as an IDE plugin to inspect a datastore, or k9s to manage a Kubernetes cluster. Testcontainers Desktop simplifies debugging by letting you define services and exposing them on fixed ports for debugging purposes.

A "service" is a collection of running containers and associated mechanisms to interract with them. To configure services, click on _Services → Open config location_. The app ships with 15+ preconfigured configuration files for popular technologies, including postgres, kafka, and many others. Simply rename a file from `.example` to a `.toml` extension to get started with the corresponding technology. 

A minimal configuration file called `postgres-datastore.toml` might look as follows:

```TOML
ports = [
    {local-port = 5432, container-port = 5432},
]

selector.image-names = ["postgres"]
```

This configuration file:

1. Defines a service called `postgres-datastore` (base on the filename).
2. Selects all running containers that contain the string "postgres" in the image name (e.g. `"postgres:15.2-alpine"`).
3. Maps the PostgreSQL container’s port `5432` onto the host’s port `5432`.

With this service defined, Testcontainers Desktop automatically reloads the configuration and lets you connect to a running container with your IDE plugin for relational databases, or the following command:

```bash
psql -h localhost -p 5432 -U test -d test
```

Configured services are listed under the "Services" menu alongside their exposed port(s). If a service is misconfigured, such as containing a typo in a core attribute, it is indicated as having "no ports configured".

#### Define services based on docker labels

When running automated tests it's possible for multiple containers belonging to the same service to run concurrently. In order to provide a stable experience, Testcontainers Desktop maps the fixed port to the oldest running container, and only switches over if it terminates.

The example files also contain instructions to go beyond the default configuration. For example, you might be running 2 separate services based on the same image, or you might want to target the leader and replicas separately. If so, follow the instructions to fine-tune how the service selects containers based on labels, which open source Testcontainers libraries let you add easily from your code. 

The following service configuration selects all running containers that contain the string "postgres" in the image name AND the specified docker label:

```TOML
ports = [
    {local-port = 5432, container-port = 5432},
]

selector.image-names = ["postgres"]

[selector.label]
"com.testcontainers.desktop.service" = "postgres-datastore"
```

### Manage the lifecycle of containers

#### Freeze containers to halt their shutdown (beta)

{{<screenshot fixedheight>}}![Testcontainers Desktop freeze containers shutdown](../images/tcd_freeze_containers_shutdown.png){{</screenshot>}}

While running your tests, you may want to inspect data before the test terminates and the container is automatically cleaned up. You can use the "Freeze containers shutdown" to halt containers termination. 

Turning on this feature is conceptually similar to setting a dynamic breakpoint before any container termination. When enabled, Testcontainers Desktop prevents your application from shuting down containers, effectively keeping the tests running indefinitely. Once you're done with your investigation, uncheck the "Freeze containers shutdown" button to resume normal test execution, including clean-up. Alternatively, see the next section on how to "Terminate containers".

Freezing containers shutdown lets you inspect development services via a fixed port (see previous section). A notification lets you know when a container becomes frozen:

{{<screenshot>}}![Testcontainers Desktop freeze notification](../images/tcd_freeze_notification.png){{</screenshot>}}

This feature is currently in beta, with the following known limitations:

* Some test frameworks have a built-in timeout configured and will terminate a test and associated containers if frozen for too long.
* Freeze only supports containers with a managed lifecycle. For example, in Testcontainers Java, it's common practice to manage the lifecycle of containers via the `@Container` annotation or inside a "try-with-resources" block. Such containers will be properly frozen when the code attempts to `close()` them. It is not currently possible to freeze long-lived, unmanaged containers such as those defined by a [singleton pattern](https://java.testcontainers.org/test_framework_integration/manual_lifecycle_control/#singleton-containers) and [reusable containers](https://java.testcontainers.org/features/reuse/).

#### Terminate containers

{{<screenshot fixedheight>}}![Testcontainers Desktop terminate containers](../images/tcd_terminate_containers.png){{</screenshot>}}

By default, Testcontainers libraries spin up ephemeral containers that are automatically cleaned up when your tests complete. You can use the "Terminate containers" command to clean up all running Testcontainers-powered containers, while sparing other vanilla containers. 

This command is useful when working with long-lived containers, such as when you:

* Rely on reusable containers to speed up your tests and local development. 
* Disable "Ryuk" (i.e. the resource reaper).
* Enable "Freeze containers shutdown".

A notification confirms how many containers are terminated:

{{<screenshot>}}![Testcontainers Desktop terminate notification](../images/tcd_terminate_notification.png){{</screenshot>}}

#### Enable reusable containers

{{<screenshot fixedheight>}}![Testcontainers Desktop enable reussable containers](../images/tcd_enable_reuse.png){{</screenshot>}}

[Reusable containers](https://java.testcontainers.org/features/reuse/) are an experimental capability that delivers a useful performance optimization: by keeping containers running and allowing multiple tests to reuse the same container, it's possible to shave off container start times. However, reusable containers are not suited for CI usage, and therefore activating the capability on desktop requires setting the `testcontainers.reuse.enable=true` property in the local `~/.testcontainers.properties file`. Testcontainers Desktop sets this property by default. It's possible to disable it under _Preferences → Enable reusable containers_.

This feature is currently in beta, with the following known limitations:

* Some Testcontainers languages do not yet implement `reuse`.
* `reuse` in Testcontainers Java does not currently support networks, in the sense that they can change the container's configuration and prevent reuse. In turn, this can impact methods such as `exposeHostPorts`.
* Testcontainers Go matches the container on `req.Name` alone, instead of its full configuration, and within a single package. This can lead to accidental reuse if separate containers share the same name.
* Testcontainers Node does not rely on the `testcontainers.reuse.enable=true` property, and therefore this feature cannot deactivate reuse as expected.
* While `reuse` prevents Ryuk from cleaning-up containers, they are stopped by regular lifecycle commands (e.g. `close()` or similar). In practice, this means they're best defined via the singleton pattern.

### Track and analyze test sessions

{{<screenshot fixedheight>}}![Testcontainers Desktop open dashboard](../images/tcd_open_dashboard.png){{</screenshot>}}

Testcontainers Desktop tracks and analyzes your testing sessions to provide insights into your development and testing patterns. You can access your dashboard by clicking _"Open dashboard..."_ or directly at https://app.testcontainers.cloud/dashboard.

Dashboards are collaborative: they aggregate test data across desktop and CI, as well as across all users in the same organization. Testcontainers Desktop tracks test data for both local and cloud runtimes, though additional insights are available when running containers in the cloud. 

{{<screenshot>}}![Testcontainers Desktop dashboard widgets](../images/tcd_dashboard_widgets.png){{</screenshot>}}

Dashboards contain widgets for your testing sessions that let you answer questions such as:

* How consistently do we test on desktop before pushing to the CI?
* Has a recent release impacted our team's testing velocity?
* What are the most popular container images we test with?
* Are there outdated dependencies used in test suites?
* Etc.

{{<screenshot>}}![Testcontainers Desktop dashboard session](../images/tcd_dashboard_session.png){{</screenshot>}}

Dashboards contain a detailed timeline of each testing session, which can help identify bottlenecks in test suites, or opportunities to run tests in parallel. When using [Turbo mode](https://knowledge.testcontainers.cloud/turbo-mode), each test session also helps validate load balancing of test suites across multiple cloud workers.

## Account management

You can view and manage your team on the https://app.testcontainers.cloud.
Just click on the [Account tab](https://app.testcontainers.cloud/dashboard/members).  

You'll be navigated to a new page displaying the list of users within your organization. If you have Admin rights, you can manage access for specific team members.
{{<screenshot>}}![Testcontainers Desktop Account tab](../images/tcd_account_members.png){{</screenshot>}}

You also have the option to delete a specific user from the team or grant them admin rights.

One more important feature is the ability to invite new team members. To do this, click on the "Invite Users" button and share the generated link. When a user logs in via the shared invitation link, their information will appear in the list of your organization's members.

If you wish to leave your current organization and join another one, follow these steps:

* Navigate to your [Account](https://app.testcontainers.cloud/dashboard/members)
* Click on the three dots next to your user row to access a dropdown menu, and select the "Leave" option. {{<screenshot>}}![Testcontainers Desktop Account tab](../images/tcd_leave_account.png){{</screenshot>}}
* You'll be navigated to the "Create Organization" page. However, before proceeding, you need to reset your token. Click on "Log Out" under your profile menu, and then close the tab.
* Now, open your Testcontainers Desktop application and select "Reset" under the Preferences tab. 
{{<screenshot>}}![Testcontainers Desktop Account tab](../images/tcd_reset.png){{</screenshot>}}
* A new web page, "Sign up for Testcontainers Desktop," will open. You can either sign up and create a new organization, or simply follow the invitation link provided by your colleague to join their organization.
{{<screenshot>}}![Testcontainers Desktop Account tab](../images/tcd_sign_up_page.png){{</screenshot>}}

If you have multiple accounts with Testcontainers Desktop, you can reset your Testcontainers Desktop token to log in with another account. To do so, follow these steps:

* Log out from https://app.testcontainers.cloud and use the "Reset" submenu in the Testcontainers Desktop app. Simply click on "Reset" under the Testcontainers Desktop application preferences.
* You will be redirected to the "Sign up for Testcontainers Desktop" page. Click on "Log In" and re-login with your desired credentials.
* To verify the account you are using with the Testcontainers Desktop application, you can expand the tray icon and check the account name below the version. 


## Troubleshooting

If you experience unexpected behavior with Testcontainers Desktop, there are a few common issues you can investigate and resolve independently. A common first step is to review the logs for the app, possibly after enabling [verbose logging](https://knowledge.testcontainers.cloud/how-to-enable-debug-logging).

{{<screenshot fixedheight>}}![Testcontainers Desktop show logs](../images/tcd_show_logs.png){{</screenshot>}}

It's also possible to reset the app to its default settings, which will require signing back in.

{{<screenshot fixedheight>}}![Testcontainers Desktop reset](../images/tcd_reset.png){{</screenshot>}}

If you continue to have trouble, click _"Get help..."_ to open the knowledge base or report an issue.

{{<screenshot fixedheight>}}![Testcontainers Desktop get help](../images/tcd_get_help.png){{</screenshot>}}

Finally, consider joining open-source maintainers, AtomicJar engineers, and fellow users in the [#testcontainers-desktop](https://testcontainers.slack.com/archives/C05JGR9CSQY) channel of the [public slack](https://slack.testcontainers.org/).