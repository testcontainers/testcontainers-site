---
title: Testcontainers Cloud Pricing
submenu: cloud
sections:
  - partial: pricing
    title: Pricing
    headingLevel: 1
    buttons:
      - label: Start For Free
        url: https://app.testcontainers.cloud/signup
      - label: Read About Metering & Billing
        url: https://knowledge.testcontainers.cloud/usage-and-billing
        style: outline
    features:
      - Test Dependencies As Code
      - Requires Local Docker Environment
      - |
        [Preconfigured Modules](/modules)
      - Max Users (desktop)
      - Max Service Accounts (CI)
      - |
        [Turbo mode](https://knowledge.testcontainers.cloud/turbo-mode)
      - Max Concurrent Workers Per Service Account (CI)
    plans:
      - title: Trial
        description: |
          Free access to Testcontainers Cloud during public beta with [some restrictions](https://knowledge.testcontainers.cloud/how-are-trial-accounts-restricted).
        prices:
          - label: / Seat per Month (on Desktop)
            value: Free
            discountValue:
          - label: / Worker Minute (in the CI)
            value: Free
            discountValue:
        features:
          - value: |
              Yes
            checkmark: true
          - value: |
              No
            checkmark: true
          - value: 50+
            checkmark: true
          - value: 10
            checkmark: false
          - value: 1
            checkmark: false
          - value: Not Available
            checkmark: false
          - value: 1
            checkmark: false
      - title: Team (beta)
        description: Unlock the full power of Testcontainers Cloud on Desktop and in your CI.
        prices:
          - label: / Seat per Month (on Desktop)
            value: $35
            discountValue:
          - label: / Worker Minute (in the CI)
            value: $0.02
            discountValue:
#        discount:
#          title:
#          description:
        features:
          - value: |
              Yes
            checkmark: true
          - value: | 
              No
            checkmark: true
          - value: 50+
            checkmark: true
          - value: Unlimited
            checkmark: true
          - value: Unlimited
            checkmark: true
          - value: Available
            checkmark: true
          - value: 16
            checkmark: true
  - partial: centered-text
    title: Open Source Libraries
    description: The Testcontainers libraries are open source and free to use.
    image: "/images/testcontainers-logo.svg"
    buttons:
      - label: Learn More
        url: /
        style: outline
---