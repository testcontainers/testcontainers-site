---
title: Thomas Vitale
role: Systematic
country: DK
languages:
  - java
  - go
socialLinks:
  - id: github
    label: ThomasVitale
    url: https://github.com/ThomasVitale
  - id: twitter
    label: "@vitalethomas"
    url: https://twitter.com/vitalethomas
  - id: linkedin
    label: vitalethomas
    url: https://www.linkedin.com/in/vitalethomas
  - id: mastadon
    label: "@thomasvitale"
    url: https://mastodon.online/@thomasvitale
---
## Bio
Thomas Vitale is a software engineer and architect focused on building cloud native, resilient, and secure applications and platforms. He works at Systematic (Denmark), is a CNCF Ambassador, Oracle ACE Pro, and the author of the “Cloud Native Spring in Action” book.

Some of his main interests and focus areas are Java, Spring Boot, Kubernetes, Generative AI, and cloud native technologies in general. Thomas likes contributing to open source projects in the Java and cloud native space (Spring Security, Spring Cloud, Spring AI, LangChain4j, Carvel, Buildpacks, OWASP CycloneDX), and sharing knowledge with the community. His speaking gigs include Spring I/O, SpringOne, Devoxx, GOTO, Jfokus, KCD, and KubeCon+CloudNativeCon.

Thomas has an MSc in Computer Engineering, specializing in software from the Polytechnic University of Turin (Italy). He is a CNCF Certified Kubernetes Application Developer, Red Hat Certified Specialist in OpenShift Application Development, and Pivotal Certified Spring Professional.

## Q&A
### What were your first experiences with Testcontainers?
My first experience with Testcontainers was in the context of a Spring Boot application to test the integration with PostgreSQL. I could obtain environment parity and higher-quality integration tests while also getting a great developer experience. I was immediately hooked.

### What’s your favourite Testcontainers module?
It's not easy to pick one. I'll go with the Testcontainers module that most recently enabled me to better develop and test LLM-powered Java applications: Ollama.

### What are your favourite features for Testcontainers?
Being able to define backing services programmatically and make them part of the local development workflows as well as integration tests.

Having access to a collection of well-designed official Testcontainers modules, that help making it even easier and more efficient to use the project.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
The most recent bug I caught only thanks to a test backed by Testcontainers was related to the Ollama integration in both the LangChain4j Spring Boot extension I maintain and the Spring AI framework (for which I delivered a fix). Ollama changed its embedding API in a non-backward compatible way and only a comprehensive test suite using the Testcontainers Ollama module allowed me to identify the problem.