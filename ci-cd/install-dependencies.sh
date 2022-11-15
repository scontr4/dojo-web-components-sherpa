#!/bin/bash

echo Node Version: $(node --version)
echo NPM Version: $(npm --version)
set -eux
rm /home/runner/work/bbog-dig-dt-angular-template-web-ui/bbog-dig-dt-angular-template-web-ui/.npmrc | true
curl -u "${ARTIFACTORY_READER_USER}:${ARTIFACTORY_READER_API_KEY}" 'https://bbogdigital.jfrog.io/bbogdigital/api/npm/auth' >> /home/runner/work/bbog-dig-dt-angular-template-web-ui/bbog-dig-dt-angular-template-web-ui/.npmrc
# for macos only
#sed -i '' 's#_auth#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:_auth#g' ~/.npmrc
#sed -i '' 's#always-auth#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:always-auth#g' ~/.npmrc
#sed -i '' 's#email#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:email#g' ~/.npmrc

sed -i 's#_auth#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:_auth#g' /home/runner/work/bbog-dig-dt-angular-template-web-ui/bbog-dig-dt-angular-template-web-ui/.npmrc
sed -i 's#always-auth#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:always-auth#g' /home/runner/work/bbog-dig-dt-angular-template-web-ui/bbog-dig-dt-angular-template-web-ui/.npmrc
sed -i 's#email#//bbogdigital.jfrog.io/bbogdigital/api/npm/npm-bbta/:email#g' /home/runner/work/bbog-dig-dt-angular-template-web-ui/bbog-dig-dt-angular-template-web-ui/.npmrc

npm ci || exit 1

