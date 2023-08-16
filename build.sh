#!/bin/bash

GIT_ORG="https://github.com/testcontainers"

echo "----------------- Downloading Community modules -----------------"
COMMUNITY_MODULE_REPO="community-module-registry"

rm -rf ${COMMUNITY_MODULE_REPO}

echo "Cloning ${GIT_ORG}/${COMMUNITY_MODULE_REPO}.git"
git clone "${GIT_ORG}/${COMMUNITY_MODULE_REPO}.git"

echo "---------------- Downloading Guides -----------------------------"
GUIDE_REPOS=(
  'tc-guide-introducing-testcontainers'
  'tc-guide-getting-started-with-testcontainers-for-java'
  'tc-guide-testing-spring-boot-rest-api'
  'tc-guide-testcontainers-lifecycle'
  'tc-guide-configuration-of-services-running-in-container'
  'tc-guide-replace-h2-with-real-database-for-testing'
  'tc-guide-testing-aspnet-core'
  'tc-guide-testing-spring-boot-kafka-listener'
  'tc-guide-testing-rest-api-integrations-using-mockserver'
  'tc-guide-getting-started-with-testcontainers-for-dotnet'
  'tc-guide-testing-aws-service-integrations-using-localstack'
  'tc-guide-testcontainers-in-quarkus-applications'
  'tc-guide-getting-started-with-testcontainers-for-go'
  'tc-guide-working-with-jooq-flyway-using-testcontainers'
  'tc-guide-getting-started-with-testcontainers-for-nodejs'
  'tc-guide-testing-rest-api-integrations-using-wiremock'
  'tc-guide-simple-local-development-with-testcontainers-desktop'
)

GUIDE_REPOS_CLONE_DIR="./guide-repos"
GUIDES_TARGET_DIR="./content/guides"

rm -rf ${GUIDE_REPOS_CLONE_DIR}
mkdir ${GUIDE_REPOS_CLONE_DIR}

for repo_name in "${GUIDE_REPOS[@]}"; do
  echo "Cloning ${GIT_ORG}/${repo_name}.git"
  git clone "${GIT_ORG}/${repo_name}.git" "${GUIDE_REPOS_CLONE_DIR}/${repo_name}/"
  rm -rf "${GUIDES_TARGET_DIR:?}/${repo_name}"
  cp -r "${GUIDE_REPOS_CLONE_DIR}/${repo_name}/guide/." "${GUIDES_TARGET_DIR}"
done
echo "------------------Guides Setup Completed ---------------------------"

# output some version numbers:
cat /etc/issue
asciidoctor -V
echo -------------
echo Some Netlify environment variables you might want to know:
echo BASE_URL is $BASE_URL
echo BUILD_ID is $BUILD_ID
echo CONTEXT is $CONTEXT
echo DEPLOY_PRIME_URL is $DEPLOY_PRIME_URL
echo URL is $URL
echo DEPLOY_URL is $DEPLOY_URL
echo REPOSITORY_URL is $REPOSITORY_URL
echo BRANCH is $BRANCH
echo COMMIT_REF is $COMMIT_REF
echo -------------
bundle env

# the main call to Hugo, passing it all parameters from the command-line:
echo Running Hugo with arguments: "$@"
hugo "$@"
hugoReturnCode=$?

if [ $hugoReturnCode -ne 0 ]
then
   echo "Hugo failed with return code ${hugoReturnCode}"
fi

exit $hugoReturnCode
