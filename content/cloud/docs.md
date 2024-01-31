---
title: Docs for Testcontainers Cloud
showTitle: true
showToc: true
submenu: cloud
---
## Overview
Running your Testcontainers tests with Testcontainers Cloud works out of the box. It gives you access to the same Testcontainers modules to test applications using popular technologies, without spinning heavy containers on your local machine.

## Getting Started

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

## Network Configuration

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

#### 2. Using the Testcontainers Cloud properties file2. Using the Testcontainers Cloud properties file

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