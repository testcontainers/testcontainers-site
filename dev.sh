#!/bin/bash

echo "----------------- Downloading Community modules -----------------"
COMMUNITY_MODULE_REPO="https://github.com/testcontainers/community-module-registry"
echo "Cloning ${COMMUNITY_MODULE_REPO}.git"
git clone "${COMMUNITY_MODULE_REPO}.git"

echo "---------------- Downloading Guides -----------------------------"
GIT_ORG="https://github.com/testcontainers"
GUIDE_REPOS=(
   'tc-guide-introducing-testcontainers'
  'tc-guide-getting-started-with-testcontainers-for-java'
  'tc-guide-testing-spring-boot-rest-api'
  'tc-guide-testcontainers-lifecycle'
  'tc-guide-configuration-of-services-running-in-container'
  'tc-guide-replace-h2-with-real-database-for-testing'
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