# BdB Angular Template

This directory is a brief example of an [Angular](https://angular.io/) app that can be used for the companie's products.

## Build It For Your Own Team

Right after your new repository has been created based on this template, you need to include the project name inside it.

For that, go ahead and **Find and Replace** _"bbog-dig-angular-template-web-ui"_ with whatever is your new project repo name. Something like _"bbog-something-web-ui"_.

Up until this point, you're ready to start working on your development.

## Commands

As of the `package.json`, you have pretty much all the common `scripts` such as:

```bash
# Install dependencies
yarn

# Run locally
yarn start
# or
yarn dev 4201

# Run tests
yarn test

# Run linter
yarn lint
```

Yes, I use `yarn` instead of `npm`. YES, I'm a nerd.

## The _"config.yml"_ file

Before you start making commits and make CircleCI fail because of CI configurations, make sure your team DevOps or most experienced developer validates the contents in the `config.yml` file. 

Please. PLEASE. Do not start building CircleCI jobs until you have a `config.yml` file configured for your team's AWS environment.

## Badges

Also if you want to brag about how well your Github Actions workflows passed, check this out.

| Environment | Branch | Badge |
| --- | --- | --- |
| Production | `master` | ![Production Deployment](https://github.com/bancodebogota/bbog-dig-angular-template-web-ui/workflows/Production%20Deployment/badge.svg?branch=master) |
| Stage | `stage` | ![Stage Deployment](https://github.com/bancodebogota/bbog-dig-angular-template-web-ui/workflows/Stage%20Deployment/badge.svg?branch=stage) |
| QA | `qa` | ![QA Deployment](https://github.com/bancodebogota/bbog-dig-angular-template-web-ui/workflows/QA%20Deployment/badge.svg?branch=qa) |

## Help

If by any chance you're having problems preparing your develpment environment or you think this introduction needs something else, go tell him ->[👨🏻‍💻](https://github.com/mnieto2)