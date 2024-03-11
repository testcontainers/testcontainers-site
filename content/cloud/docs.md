---
title: Docs for Testcontainers Cloud
showTitle: true
showToc: true
submenu: cloud
---
## Overview
Running your Testcontainers tests with Testcontainers Cloud works out of the box. It gives you access to the same Testcontainers modules to test applications using popular technologies, without spinning heavy containers on your local machine.

## How does Testcontainers Cloud work?
The Testcontainers Cloud agent opens an SSH tunnel and connects to the Docker daemon in the cloud environment

Testcontainers Cloud removes the need for local Docker installation. When you trigger your tests in a local environment Testcontainers Cloud agent opens an SSH tunnel and connects to the Docker daemon in the cloud environment. It will pull a Docker image and start the container defined in your Testcontainers-based test. Connection to the cloud environment will be active while your tests are running. When your test suite completes, Testcontainers Cloud will wait for a short period of time and then close the connection and remove allocated resources automatically. 
{{<screenshot>}}![Testcontainers Desktop cloud connection diagram](../images/tcd_cloud_diagram.png){{</screenshot>}}

## Getting Started

### Installing the client

1. Download and install [Testcontainers Desktop](/desktop/docs/)
2. Select the `Testcontainers Cloud` runtime

{{<screenshot fixedheight>}}![Testcontainers Desktop cloud runtime](../images/tcd_cloud_runtime.png){{</screenshot>}}

You can now run your Testcontainers based tests with containers running in the Testcontainers Cloud.

If you don't have existing tests that use Testcontainers, you can use one of the examples projects that contains a few tests that verify that Testcontainers Cloud is configured correctly on your machine.

### Example Projects

#### .NET
```shell
git clone https://github.com/AtomicJar/testcontainers-cloud-dotnet-example
cd testcontainers-cloud-dotnet-example
dotnet test --logger:"console;verbosity=detailed"
```
#### Go
```shell
git clone https://github.com/AtomicJar/testcontainers-cloud-go-example
cd testcontainers-cloud-go-example
go mod download
go test -v -count=1
```

#### Java
```shell
git clone https://github.com/AtomicJar/testcontainers-cloud-java-example
cd testcontainers-cloud-java-example
./mvnw test
```

#### Node.js
```shell
git clone https://github.com/AtomicJar/testcontainers-cloud-nodejs-example
cd testcontainers-cloud-nodejs-example
npm install
npm test
```

### Running existing tests

Running your existing Testcontainers based integration tests works out of the box with Testcontainers Cloud.
To get a better feel for the experience of using Testcontainers Cloud, we recommend running your test two times in quick succession, so that you can get a feeling for working with a warmed-up environment.

Testcontainers Cloud also works when you run your tests from your IDE, so often it is useful to get started by running a few tests from the IDE to get an overview of how your project's tests run on Testcontainers Cloud. Use normal IDE functionality to run the tests and check the output logs for Testcontainers Cloud being the used Docker implementation.

If you want to switch back to local Docker just stop Testcontainers Cloud Client app and your Testcontainers based integration tests will run using local Docker.

<!-- TODO: is this still correct? Consider rewriting to combine with disable section below? -->
### How the correct container runtime is chosen

Sometimes a system has access to both a Docker daemon and Testcontainers Cloud. To resolve which Docker environment to use Testcontainers libraries do the following in order:

1. Obtain Docker location from the environment variable `DOCKER_HOST`
2. Read the `~/.testcontainers.properties` file (if it exists):
    - Find the Docker location is from its docker.host property
3. Fall back to trying the default Docker locations for the current operating system 

Testcontainers Cloud Agent, both Desktop and CI, configures its own location in the `~/.testcontainers.properties` file, which makes the tests automatically prefer it, unless the user explicitly defined a `DOCKER_HOST` environment variable. 

You can also configure individual projects not to consider the configuration in the `~/.testcontainers.properties` file. 

### Disable for a specific project

When started Testcontainers Cloud configures the local environment to use it for Testcontainers tests by default. Sometimes you might want to opt-out from using it in a specific project, for example because it uses older Testcontainers libraries not yet compatible with Testcontainers Cloud or code patterns that are not ideal for a cloud-based container execution. 

You can configure a particular project not to use the global Testcontainers Cloud configuration by updating the dockerconfig.source property in the `testcontainers.properties` configuration file within the project. 

This option is available for some Testcontainers libraries, for example, testcontainers-java since version 1.16.1. 

Add the `testcontainers.properties` configuration file to the classpath of your project with the following content:

```none
dockerconfig.source=autoIgnoringUserProperties
```

You can keep the Testcontainers Cloud client app running and no more changes are needed, but this project will now use the usual automatic Testcontainers environment discovery mechanism to find a suitable way to communicate with Docker.

### Parallelize your tests with Turbo mode

Testcontainers Cloud Turbo mode allows you to run tests in parallel so that each test process receives its own cloud environment making tests parallelization scalable.
Parallelizing tests is one of the ways to speed up the execution of your build. 

Depending on the composition of a test suite, and compute resources available parallel tests might not improve performance due to bottlenecking on local compute resources. Testcontainers Cloud Turbo mode enables one cloud environment per process running  Testcontainers tests.

This means that increasing the number of processes simultaneously running tests doesn't increase the load on local compute resources linearly and the scalability of the cloud environment helps to run you tests faster. 

Turbo mode will benefit users who struggle with massive test suites which run longer than is acceptable. Here's how you can enable Testcontainers Cloud Turbo mode and configure your tests to run in parallel. 

{{<note>}}
Note that Turbo mode is currently restricted for Trial accounts, please consult the following page to learn more: https://knowledge.testcontainers.cloud/how-are-trial-accounts-restricted
{{</note>}}

#### Start using Turbo Mode with Testcontainers Cloud on Desktop

In the Testcontainers Cloud Desktop application you can select the checkbox Turbo mode to enable the mode locally.

{{<screenshot fixedheight>}}![Testcontainers Desktop turbo mode](../images/tcd_turbo_mode.png){{</screenshot>}}

#### Turn on Turbo mode in CI:

When starting the agent in CI specify the `--max-concurrency=N` flag to enable a maximum of N concurrent Testcontainers Cloud environments available to processes using this agent. 

The default value for `--max-concurrency` is 4. 

You can also configure the concurrency option via an environment variable `TC_CLOUD_CONCURRENCY`, for example setting: 

```shell
export TC_CLOUD_CONCURRENCY=2
```

Now you're ready to run tests in parallel using scalability of Testcontainers Cloud. If you're new to running tests in parallel here's a quick instruction on how to try it with common build tools. 

#### How to turn on Turbo mode with a Java project using Gradle

To run tests in parallel with Gradle add maxParallelForks to the test task in your gradle.build file: 

```none
test.maxParallelForks = 4
```

This will instruct Gradle to use up to 4 forked processes to run tests and if you configured Turbo mode, containers created in each fork will not overload the same Docker environment. 

If you would like to try Turbo mode on a Java project, consider using the sample project by following the instructions in its [GitHub repo](https://github.com/AtomicJar/testcontainers-cloud-turbo-mode-sample).

#### How to turn on Turbo mode with a Java project using Maven

If you're using Maven as your build tool, you're probably using Surefire plugin for test execution. Surefire plugin supports parallel test execution and you can read the docs on how to enable it. In general to run tests in parallel with Maven you can add the parallel and forkCount properties to the configuration of Maven Surefire or Failsafe plugins in your pom.xml. Note that you need a modern version of the Surefire plugin, here's a sample configuration for it:  

```java
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-surefire-plugin</artifactId>
  <version>3.0.0-M7</version>
  <configuration>
    <parallel>classes</parallel>
    <forkCount>4</forkCount>
  </configuration>
</plugin>
```

If you would like to try Turbo mode on a Java project, consider using the sample project by following the instructions in its GitHub repo.

#### How to verify that Turbo mode is enabled?

When you enabled Turbo mode for Testcontainers Cloud and parallel tests in your build tool, you should see multiple lease allocations in the connection tab of the Testcontainers Cloud application once you run your tests.

{{<screenshot>}}![Testcontainers Desktop check turbo mode is enabled](../images/tcd_turbo_enabled.png){{</screenshot>}}

#### How does Testcontainers Cloud decide which containers to run in the same cloud environment?

We use sessions to distinguish containers, so the same process will connecting to the same cloud environment for example if a test needs to start several containers.

But a parallel process runs will receive a new cloud environment if the maximum concurrency configuration for the currently running Testcontainers Cloud agent allows creating more cloud environments. 

So if you have configured Turbo mode,  but only one test process, then all the containers used in the tests will run in the same cloud environment, even if you are running tests in parallel within one process.

If you have multiple test processes (for example forked JVMs), then with Turbo Mode each  JVM will, if possible, receive to a dedicated cloud environment. 

### Memory limit

<!-- TODO: Technically this is 8-16 GB depending on the zone. -->
Each Testcontainers Cloud session gets 8G of RAM. You can see this information in the logs when the connection is established:

```shell
Connected to docker: 
  Server Version: 70+testcontainerscloud
  API Version: 1.41
  Operating System: Ubuntu 22.04 LTS
  Total Memory: 7396 MB
```

Currently, it's not possible to extend or limit memory usage for a single Testcontainers Cloud session. 

### Check tests are running in the cloud

Explore the Connection section in the Testcontainers Cloud Desktop application.

{{<note>}}
Since Testcontainers Cloud v1.3.1 you'll see the cloud on the tray icon when connection is established and lease is 'Active'
{{</note>}}

If you installed the Testcontainers Cloud application on your local machine you should see the icon in the tray menu. To check that your tests are running with the Testcontainers Cloud application just click on the Testcontainers Cloud application icon, you'll see the connection state: Running or Passive. If you click on the Connection sub-menu you'll see the detailed connection information. 

**Connected to:** zone/region you are connected to (connection latency in ms)

**Leases:** id of the opened connection (STATE).

`ACTIVE` Leases mean that your connection is active and you have Testconatiners Cloud resources allocated for your tests.

`PASSIVE` Leases mean that your connection is closed and no more Testconatiners Cloud resources are allocated.

**Data:** R: reading kB, W: writing kB

<!-- TODO: Update screenshots -->
#### Running State

{{<screenshot>}}![Testcontainers Desktop cloud connection status - running](../images/tcd_cloud_connection_running.png){{</screenshot>}}

#### Passive State

{{<screenshot>}}![Testcontainers Desktop cloud connection status - passive](../images/tcd_cloud_connection_passive.png){{</screenshot>}}

<!-- TODO: Move autostart section desktop docs? -->
### Automatically start the client on system restart

To bring more convenience into user experience we added an Autostart checkbox in the menu of our desktop application. If you want to start Testcontainers Cloud automatically after you turn on or restart your computer, just enable this checkbox. It works the same for all supported operating systems. 

<!-- TODO: Update screenshot -->
{{<screenshot fixedheight>}}![Testcontainers Desktop autostart](../images/tcd_autostart.webp){{</screenshot>}}

## Optimizing usage

As your team increases its adoption of Testcontainers Cloud, there might be a point where you wish to optimize your usage. This article describes some useful techniques.

### Fine-tune turbo mode

[Turbo mode](#parallelize-your-tests-with-turbo-mode) allows you to run tests in parallel by requesting multiple workers. In general, this is a net-positive as your CI pipelines run faster, and overall usage stays relatively constant. For example, in an ideal case, a pipeline that previously took 15 minutes running on a single worker might instead take 5 minutes when being parallelized across 3 workers. However it's also possible to request more workers than is useful, increasing total usage without achieving significant speed improvements. When that happens, you can reduce the number of requested workers (e.g. `--max-concurrency` flag) and confirm that the duration stays constant, effectively reclaiming some unproductive usage.

### Terminate workers eagerly when your tests finish

By default, workers remain active for a certain period of inactivity before they shutdown to provide a smooth user experience, particularly on desktop. In CI pipelines it's often possible to know that a specific pipeline or job will no longer need access to its Testcontainers Cloud worker(s) once it completes. In such cases, it's possible to optimize usage by eagerly terminating worker(s) on agent shutdown. To do so, simply pass the `--terminate` flag as an argument when starting the agent. Alternatively, you could call the `terminate` command while the agent is still running.

{{<note>}}
Note: available in version **1.3.32** and beyond.
{{</note>}}

## Compatibility with Docker

### Using the Docker CLI

It is currently possible to talk directly to the underlying Docker API using the Docker context:

```shell
docker context use tcc
docker ps
```

If you want to see information about CPU/memory usage for TCC sessions you can then use

```shell
docker stats
```

Or 

```none
DOCKER_CONTEXT=tcc docker stats
```

However, note that Testcontainers Cloud is not a generic “Docker-as-a-Service” and this should be considered an implementation detail.

<!-- TODO: Soon to be inaccurate once bind mounting is available in Desktop? -->
### Mounting the local filesystem

Mounting of files from the local filesystem into containers is not implemented. Consider using the copyFileToContainer and copyFileFromContainer methods instead.

For example, if you have created and started a container:

```java
GenericContainer myContainer = new GenericContainer(ALPINE_IMAGE).withCommand("top");
myContainer.start();
```

You can copy files in both directions like this:

```java
MountableFile mountableFile = MountableFile.forClasspathResource("filename");
myContainer.copyFileToContainer(mountableFile, "/path/in/Docker");

File fromContainer = ...; // create File object
myContainer.copyFileFromContainer("/path/in/Docker", fromContainer.getPath());
```

You can find more examples of the copyFileToContainer in the FileOperationTests on GitHub.

## Network Configuration

### Using internal Docker registries

For users who need to pull images from a ‘private’ registry that is not accessible from the public internet. Docker Hub, Amazon ECR, GCR, etc users *do not* need to use this feature, as these registries are exposed to the public internet.

This feature requires version v1.4.1+ of the Testcontainers Cloud Desktop/agent application. 

#### Testcontainers Cloud Desktop usage:

Set per-user configuration in the `~/.testcontainers.properties` file:

```none
cloud.private_registry.proxy.url = https://private.registry.example.com:8999
```

It's possible to configure more than one registry:

```none
cloud.private_registry.proxy.url = https://private.registry.example.com:8999
cloud.private_registry.proxy.url.second = https://private2.registry.example.com:8999
cloud.private_registry.proxy.url.test = https://test.registry.example.com:8999
```

{{<note>}}
The part after .url. has to be unique, however, used only for convenience, so could be anything
{{</note>}}

Enable images such as `private.registry.example.com:8999/prefix/name` to be pulled:

```none
cloud.private_registry.proxy.allowed_image_name_globs = **
```

Or more precisely:

```none
cloud.private_registry.proxy.allowed_image_name_globs = prefix/*,prefix/name
```

define this way comma-separated list of globs for images allow-listed for pulls (`**` means all). We would recommend that you keep the allowed list as small as possible.

It's possible to ignore certificate-related issues with the:

```none
cloud.private_registry.proxy.insecure_skip_verify = true
```

This is not recommended, as allows MitM attacks, however, could be used for testing purposes in case of connection issues.

Updates will be loaded on startup so you need to **Restart the Testcontainers Cloud application**

#### Agent CLI usage:

Add flags to the CLI invocation (the flag can be specified for each registry you want to enable):

```none
--private-registry-url=https://private.registry.example.com:8999 --private-registry-url=https://private2.registry.example.com:8999
```

Enable images such as `private.registry.example.com:8999/prefix/name` or `private.registry.example.com:8999/name` to be pulled.

```none
--private-registry-allowed-image-name-globs=** 
```

Or more precisely:

```none
--private-registry-allowed-image-name-globs=prefix/*,prefix/name
```

define this way comma-separated list of globs for images allow-listed for pulls (`**` means all). We would recommend that you keep the allowed list as small as possible.

#### Current limitations:

- Image pull is supported, but the push will be prevented.
- Proxying must be configured on a per-machine basis, but we expect this to be configurable organisation-wide later
- Credentials/tokens for all public/private docker registries are visible to the Testcontainers library and Testcontainers Cloud (data is proxied but not stored).
- Images pulled from private registries are cached within users’ Testcontainers Cloud VM, which is deleted automatically after being idle for approximately 30 minutes.

{{<note>}}
As security measures, the agent will only allow proxying to a single configured registry host, restricts HTTP verbs to HEAD/GET, and only will enable requests which match an allowlist of paths (the path allowlist is based on the images which the agent is configured to allow).

At present these settings are configured on a per-installation basis, but we expect these to become centrally configurable at a later date.
{{</note>}}

### How to use behind a Proxy

You can use environment variables or Testcontainers Settings to set up your Testcontainers Cloud client to point to your proxy.
If you are running Testcontainers Cloud client in a network which uses an HTTP Proxy, you have three ways of setting up the client to use it.

#### 1. Using environment variables

If you are launching the client from a shell which has any of the following environment variables set up to point to your proxy, the client will automatically pick these up and you're already good to go:

```none
`http_proxy` or `HTTP_PROXY`
`https_proxy` or `HTTPS_PROXY`
`no_proxy` or `NO_PROXY`
```

#### 2. Using the Testcontainers Cloud properties file

If you do not have the option of setting shell environment variables, you can also provide the proxy settings by adding any or all of the following optional lines:

```none
http_proxy=host:port
https_proxy=host:port
no_proxy=host1, host2
```

to the `cloud.properties` file at one of the following locations:
##### MacOS and Linux
If `$XDG_CONFIG_HOME` is set: 
```none
$XDG_CONFIG_HOME/testcontainers/cloud.properties
```

Otherwise: 
```none
$HOME/.config/testcontainers/cloud.properties
```

##### Windows
If `$XDG_CONFIG_HOME` is set: 
```none
%xdg_config_home%\testcontainers\cloud.properties
```

Otherwise: 
```none
%userprofile%\.config\testcontainers\cloud.properties
```

#### 3. Using the Testcontainers Settings
Alternatively, you can also provide the proxy settings in the `$HOME/.testcontainers.properties` file. 
The keys are the same as for Testcontainers Cloud properties file above. 

## Troubleshooting

### Accessing logs

#### Testcontainers Desktop

The application writes the log into the file in the system-dependent location. The easiest way to access that location is via the menu `Preferences > Show logs...`

To locate the destination manually, these locations should be used:

- On macOS: `$HOME/Library/Logs/AtomicJar/testcontainers.cloud.desktop/testcontainers-cloud-desktop.log`
- On linux: `${XDG_CACHE_HOME:-$HOME}/.cache/AtomicJar/testcontainers.cloud.desktop/testcontainers-cloud-desktop.log`
- On windows: `%LocalAppData%/AtomicJar/testcontainers.cloud.desktop/testcontainers-cloud-desktop.log`

{{<note>}}
The log file is rotated once it gets bigger than 5Mb.
{{</note>}}

#### Testcontainers Cloud Agent

The agent writes logs to the stderr once executed. To store logs in a file, the agent could be launched this way:

```shell
./tcc-agent > "./tcc/agent.log" 2>&1 &
```

This will redirect both stdout and stderr output to a specified location.

#### GitHub Action

Writing to a specific logfile supported out of the box in the official [GitHub Action](https://github.com/AtomicJar/testcontainers-cloud-setup-action) via `logfile` parameter. Later, the log file can be uploaded for download via [actions/upload-artifact](https://github.com/actions/upload-artifact) action.

### Enable verbose logging

This can be useful for debugging issues with the help of additional debug log level enabled in the agent logs

#### Testcontainers Cloud Desktop usage:

Add a property into a per-user configuration in the `~/.testcontainers.properties` file:

```none
cloud.logs.verbose = true
```

You would have to **Exit**, and then relaunch the client to apply the configuration change.

#### Agent CLI usage:

Add the flag to the CLI invocation:

```none
--verbose
```

the same result could be achieved with the help of the environmental variable

```none
TC_CLOUD_LOGS_VERBOSE=true
```

Agent CLI will also respect the property value from the Testcontainers Cloud Desktop usage section.

#### Alternatively, on linux, you could try: 

Adding the following line into `~/.profile` file:

```none
export TC_CLOUD_LOGS_VERBOSE=true
```

#### On the MacOS:

It's possible to run desktop client from the terminal with full access to the environment variables management for debugging purposes:

```shell
open -W --stdout $(tty) --stderr $(tty) /Applications/Testcontainers\ Cloud\ Desktop.app
```

this way all the environment variables could be defined inline: 

```shell
TC_CLOUD_LOGS_VERBOSE=true open -W --stdout $(tty) --stderr $(tty) /Applications/Testcontainers\ Cloud\ Desktop.app
```

#### How to verify if it was enabled:

If everything is correct, you will see in the log a similar line very early in the log flow:

```none
2022-11-07T18:47:56.964Z --- DBG Verbose output enabled
```
