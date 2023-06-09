---
title: Selenium
categories:
  - web
docs:
  - id: java
    url: https://java.testcontainers.org/modules/webdriver_containers/
    example: |
      ```java
      var chrome = new BrowserWebDriverContainer<>()
        withCapabilities(new ChromeOptions())
      chrome.start();
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.WebDriver
    example: |
      ```csharp
      var WebDriverContainer = new WebDriverBuilder()
        .WithBrowser(WebDriverBrowser.Chrome)
        .Build();
      await WebDriverContainer.StartAsync();
      ```
description: |
  Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation. Selenium specifically provides an infrastructure for the W3C WebDriver specification — a platform and language-neutral coding interface compatible with all major web browsers.
---