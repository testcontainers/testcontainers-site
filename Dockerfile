ARG NODE_VERSION=20.3.0-alpine
ARG HUGO_VERSION=0.111.3

FROM node:${NODE_VERSION}-alpine3.18 as builder

# Install tools
RUN apk update && apk --no-cache add bash git

COPY . /app

WORKDIR /app

# Build the site
ARG COMMUNITY_MODULE_PR=
RUN COMMUNITY_MODULE_PR=${COMMUNITY_MODULE_PR} /app/dev.sh

FROM klakegg/hugo:${HUGO_VERSION}-ext-asciidoctor

COPY --from=builder /app /src

WORKDIR /src

EXPOSE 1313

CMD ["server"]
