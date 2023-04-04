---
title: Selenium
categories:
  - web
docs:
  - id: java
    url: https://www.testcontainers.org/modules/webdriver_containers/
    example: |
      ```java
      var chrome = new BrowserWebDriverContainer<>()
        withCapabilities(new ChromeOptions())
      chrome.start();
      ```
description: |
  Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation. Selenium specifically provides an infrastructure for the W3C WebDriver specification — a platform and language-neutral coding interface compatible with all major web browsers.
---