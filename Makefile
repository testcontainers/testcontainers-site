# Description: Makefile for the project
# Build targets to build and run the Testcontainers website.
# ------------------------------
# Tools needed:
# - Make
# - Docker
# ------------------------------
# Variables used to configure the build process:
# - NodeJS version, default is 20.3.0
# - Port for the website, default is 1313
# - Community Modules Site PR, default is empty
# - Container name, default is testcontainers-site
# - Community Modules Site path, default is empty, in case you want to use a local version of the community modules site.
NODE_VERSION ?= 20.3.0
PORT ?= 1313
COMMUNITY_MODULE_PR ?=
CONTAINER_NAME ?= testcontainers-site
COMMUNITY_MODULE_PATH ?=
COMMUNITY_MODULE_VOLUME =
ifneq ($(COMMUNITY_MODULE_PATH),)
		COMMUNITY_MODULE_VOLUME = -v "$(COMMUNITY_MODULE_PATH):/src/community-module-registry"
endif
# ------------------------------
.PHONY: build
build:
	@echo "Building the project..."
	docker build --no-cache \
		--build-arg "NODE_VERSION=$(NODE_VERSION)" \
		--build-arg "COMMUNITY_MODULE_PR=$(COMMUNITY_MODULE_PR)" \
		-t testcontainers/site:latest .
# ------------------------------
.PHONY: run
run:
	@echo "Running the project..."
	@echo "$(COMMUNITY_MODULE_VOLUME)"
	@docker run --rm -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):1313 \
		-v "$(CURDIR)/archetypes:/src/archetypes" \
		-v "$(CURDIR)/assets:/src/assets" \
		-v "$(CURDIR)/content:/src/content" \
		-v "$(CURDIR)/data:/src/data" \
		-v "$(CURDIR)/layout:/src/layout" \
		-v "$(CURDIR)/layouts:/src/layouts" \
		-v "$(CURDIR)/static:/src/static" \
		$(COMMUNITY_MODULE_VOLUME) \
		testcontainers/site:latest
ifeq ($(OS),Windows_NT)
# Windows specific browser open and ignore exit error code 1
	-@explorer http://localhost:$(PORT)
else
	@open http://localhost:$(PORT)
endif
# ------------------------------
.PHONY: logs
logs:
	@docker logs -f $(CONTAINER_NAME)
# ------------------------------
.PHONY: kill
kill:
	@echo "Killing the project..."
	@docker rm -fv $(CONTAINER_NAME)
# ------------------------------
