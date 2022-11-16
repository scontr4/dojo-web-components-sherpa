#!/bin/bash

echo Node Version: $(node --version)
echo NPM Version: $(npm --version)
set -eux
rm ~/.npmrc | true
curl -u "${ARTIFACTORY_READER_USER}:${ARTIFACTORY_READER_API_KEY}" 'https://bbogdigital.jfrog.io/bbogdigital/api/npm/auth' >> ~/.npmrc
echo -1_---- ~/.npmrc -----
cat ~/.npmrc

npm ci || exit 1

