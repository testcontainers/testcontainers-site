---
title: Kyle Aure
role: IBM
country: US
languages:
  - java
socialLinks:
  - id: github
    label: KyleAure
    url: https://github.com/KyleAure
  - id: linkedin
    label: kyleaure
    url: https://www.linkedin.com/in/kyleaure/
---
## Bio
Kyle Aure is a Software Developer at IBM working on Open Liberty an enterprise Java application platform. He has used Testcontainers to modernize and stablize the database functional test infrastructure for Open Liberty. He is also an avid committer to the Jakarta Concurrency and Jakarta Data specifications. He has a passion for database access and diversity/inclusion in the developer profession.

Kyle has a degree in Computer Science from Winona State University and has been working as a back-end software developer for 5 years. He is also a master knitter and is easily spotted in crowds while wearing hand-knit sweaters.

## Q&A
### What were your first experiences with Testcontainers?
I helped prototype a new functional test infrastructure for Open Liberty. 
We wanted to be able to write one test and run it on a suite of supported databases which included Oracle, PostgreSQL, Microsoft SQLServer, DB2, and the in-memory database Derby.

We had infrastructure in the past that relied on virtual machines. 
The use of VMs lead to intermittent failures when these machines would go down, the database process would stop for some reason, and they were difficult to upgrade.
I was interested in containers and a coworker mentioned the Testcontainer project and I was able to prototype the solution so quickly we decided to use it as a solution.

Today, we have expanded our implementation to utilize an in-house repository for images, and a suite of in-house docker hosts for fail-over during outages.

### What’s your favourite Testcontainers module?
Oracle-XE - I am the Oracle subject matter expert for my team, having an Oracle container makes prototyping config and solutions so much easier.

### What are your favourite features for Testcontainers?
Image name substitution - without the ability to use an alternative image repository this would not be an enterprise ready project.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
I work with many customers who use an Oracle database as a datastore for their Java applications running on Open Liberty.

A couple of years ago many of our customers had the same goal of removing database username/password credentials from their Open Liberty server configuration.
When this happened I was able to quickly prototype a solution by creating an Oracle database container that supports authentication via TLS.

I was then able to test the solution using Testcontainers in our already established test infrastructure.
I then pushed the automated test in our GitHub repository and was able to point customers and our internal teams to this test which shows exactly how to configure both the Database and Open Liberty.