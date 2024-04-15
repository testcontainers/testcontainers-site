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
NODE_VERSION ?= 20.3.0
PORT ?= 1313
COMMUNITY_MODULE_PR ?=
CONTAINER_NAME ?= testcontainers-site
# ------------------------------
.PHONY: build
build:
	@echo "Building the project..."
	docker build \
		--build-arg "NODE_VERSION=$(NODE_VERSION)" \
		--build-arg "COMMUNITY_MODULE_PR=$(COMMUNITY_MODULE_PR)" \
		-t testcontainers/site:latest .
# ------------------------------
.PHONY: run
run:
	@echo "Running the project..."
	@docker run --rm -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):1313 \
		-v $(PWD)/archetypes:/src/archetypes \
		-v $(PWD)/assets:/src/assets \
		-v $(PWD)/content:/src/content \
		-v $(PWD)/data:/src/data \
		-v $(PWD)/layout:/src/layout \
		-v $(PWD)/layouts:/src/layouts \
		-v $(PWD)/static:/src/static \
		testcontainers/site:latest
	@open http://localhost:$(PORT)
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
