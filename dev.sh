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

PREVIEW_GUIDE_REPOS=(
)
PREVIEW_BRANCH='preview'

for repo_name in "${PREVIEW_GUIDE_REPOS[@]}"; do
  echo "Cloning ${GIT_ORG}/${repo_name}.git"
  git clone -b "$PREVIEW_BRANCH" "${GIT_ORG}/${repo_name}.git" "${GUIDE_REPOS_CLONE_DIR}/${repo_name}/"

  for i in "${GUIDE_REPOS_CLONE_DIR}/${repo_name}/guide"/*/index.adoc; do
     sed -i'' -e "s/${repo_name}\/main/${repo_name}\/${PREVIEW_BRANCH}/g" "$i"
  done

  rm -rf "${GUIDES_TARGET_DIR:?}/${repo_name}"
  cp -r "${GUIDE_REPOS_CLONE_DIR}/${repo_name}/guide/." "${GUIDES_TARGET_DIR}"
done

echo "------------------Guides Setup Completed ---------------------------"