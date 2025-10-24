

# testcontainers-site [![Netlify Status](https://api.netlify.com/api/v1/badges/bec91239-ecd9-4f28-8908-ee63623ac60a/deploy-status)](https://app.netlify.com/sites/testcontainers-site/deploys)
testcontainers.com website

## External repositories

## Community module registry

https://github.com/testcontainers/community-module-registry

## Guides

https://github.com/orgs/testcontainers/repositories?q=tc-guide

A list of current live and development guides can be found in `build.sh` and `dev.sh`

## Development Requirements

### Docker
    
https://docs.docker.com/get-docker/

### Make
    
https://www.gnu.org/software/make/#download

## Development

The project offers a `Makefile` with targets to simplify the development process. This file accepts the following variables in order to customise the build process:

- NodeJS version, default is 20.3.0. Make variable: `NODE_VERSION=20.3.0`.
- Port for the website, default is 1313. Make variable: `PORT=1313`.
- Community Modules Site PR, default is empty. Make variable: `COMMUNITY_MODULE_PR=`.
- Community Modules Site Path, default is empty. Make variable: `COMMUNITY_MODULE_PATH=`. Use this variable if you want to update the community modules site with a local path.
- Container name, default is testcontainers-site. Make variable: `CONTAINER_NAME=testcontainers-site`.

So please feel free to use them when running the targets.

### Running the project locally

1. **Import external content** *(required)* 

    Run `make build` from the project root folder.

    The guides and modules are maintained in separate repositories. If you want to preview the site with that content during development this target will clone and process it.

    It's possible to run the site for a pull request in the `Community Module Registry` repository by running `COMMUNITY_MODULE_PR=<PR_NUMBER> make build`. This will clone the repository and checkout the PR branch.

    It's also possible to run the site with a local path for the `Community Module Registry` repository by running `COMMUNITY_MODULE_PATH=<PATH_TO_REPO> make run`. This will mount a volume with the local path to the repository.

2. **Run the local server**

    Run `make run` to bring up a Docker container using a consistent version of Hugo that will watch changes and serve a preview at http://localhost:1313/ (or the specified port). Please consider passing the Community Module Registry PR or Path variables if you want to preview the site with that content.

3. **Getting container logs**

    Run `make logs` to fetch the logs from the running container.

### Testcontainers Languages

In order to add a new language to the Testcontainers site, you need to follow these steps:

1. Add the language logo to the `assets/images/language-logos` folder, in SVG format.
2. Add the language to the `data/languages.yml` file. Make sure to fill in the `slug`, `title`, `logo`, `link` and `order` fields.
3. Add the language to the `$filterLanguages` variable in the `layouts/modules/list.html` file.
4. Add the language pill image as `/images/modules/language-$LANGUAGE.png`, in PNG format.
  - Generate the pill container:
    - height: 60px
    - padding x: 30px
    - corner radius: full
    - background: #E6EAFA
  - Place the text on top of the base image.
  - Generate the image pill using the following font options:
    - family: Rubik
    - weight: Medium
    - size: 30px
    - color: #291A3F
5. Add the language to the `$languageImages` dict variable in the `layouts/partials/utils/share-image.html` file.
6. Add the language to the `languages` array in the `content/modules/_index.md` file.
7. Add the language to the `content/community-champions/_example.md.example` file, as a reference for adding a champion for the language.
8. Add the code example for creating a Redis container in the `content/_index.md` file. Make sure to fill in the `id`, `url`, `external`, and `code` fields.

### Pages

Pages that are not long form content (e.g. `/getting-started`) and not populated by listed content (e.g. `/modules/`) primarily use sectioned content defined in the markdown frontmatter like this:

```
sections:
  - partial: partial-name
    prop-1: lorem ipsum
    prop-2: |
        lorem ipsum
```

These section blocks are created in `/layouts/partials/sections/` with an additional style file per section in `/assets/sass/sections/` which are imported in `main.scss`.

### Guides 

#### Overview

Guides are all stored in individual public repositories along with the code they use. They are written in AsciiDoc and processed with Asciidoctor.

#### Updating content

The content folder `/content/guides/` is in `.gitignore`. The `dev.sh` script is used to clone and copy the guide content into this folder. 

Editing of the guides content should be done in the individual source repos.

#### Adding a new guide

Follow the instructions for creating a new guide project here https://github.com/testcontainers/tc-guide-template

Then update the list of guide repos in `dev.sh` and `build.sh`.

#### Styling

The styles for the guides content can be found in `/assets/sass/guides/` with the styles relating to the text content in `/assets/sass/_longform.scss` and `/assets/sass/guides/_asciidoctor.scss`.

### Modules

#### Overview

Modules are all stored in a public community modules repository. Each module declaration consists of a folder with the structure:

```
module-name
  index.md
  logo.svg (optional)
  share.png (optional)
```

[The full public specification can be found here](https://github.com/testcontainers/community-module-registry/blob/main/README.md)

The `share.png` support is an undocumented feature only to be used when needed. It allows for overriding the default module share image generation.

Community modules are imported using the `dev.sh` script for local preview.

#### Adding / Updating content

Updating public modules should be done in the public repository. However there is support for adding additional modules or overriding existing modules by adding them to `/content/modules/`. Any modules added this way should follow the same specification as the public modules.

Any changes to the module specification as required for site changes should be updated in the public repository.

#### Updating the filter

To add or remove languages from the modules list filter update `$filterLanguages` in `/layouts/modules/list.html`

#### Share image generation

We use Hugo's built in support for generating images at build time to create the share images for modules based on a template.

The code can be found in `/layouts/partials/utils/share-image.html`

It requires the module logo image to be in `png` format so we use a preprocessing step (`/convert-svg.js`) to convert the `svg` logos and store them in `/assets/images/modules/share-logos/`.

#### Styling

The styles for modules can be found in `/assets/sass/modules/`.

### Community Champions

An example champion file can be found at `/content/community-champions/_example.md.example`.

Champion pages require a photo (`/assets/images/community-champions/page-name.jpg`) and share image (`/assets/images/community-champions/page-name-share.png`) in the assets folder with matching files names. These files are created from a [template in Figma here](https://www.figma.com/file/S947tvp4er8plrum5lyg21/%F0%9F%8F%86-TC-Community-Champions?type=design&node-id=0-1&mode=design).

#### Countries

The champions country of residence is set using the ISO alpha-2 country code. A list of codes is maintained in `/data/countries.yml` and matching flags are kept in `/assets/images/flags/`.

#### Languages

Any lanugages used by champions should be added to `/data/languages.yml`. See the *Programming Languages* section below for details.

#### Social Links

The existing supported social links are listed in the example champion file. When adding a new one a matching logo should be added to `/assets/images/social/`.

### Programming Languages

Acrosss the site we make references to programming languages. This might mean we need the language logo or title or the link to the TC implementation in that language. To cut down on duplication we store all of this information in `/data/languages.yml` and refrerence it in templates.

This list should be kept up to date and include any language that is reference in guide, module or community champion page.

Languages must have an `order` which controls the order they are listed in templates.

*In Hugo dictionaries are converted to maps when used in `range` loops and are by default sorted alphabetically so we use the `order` param and a `sort` in the range to control it*.

#### Code highlighting

Highlighting is done using [highlight.js](https://highlightjs.org/) which is configured to support the currently used languages. If additional languages are needed then `/static/js/highlight.min.js` will need to be [regenerated](https://highlightjs.org/download) with the new languages included.

### Tags

Tags are used in guides, they make use of the Hugo taxonomy system. Any tag used in a guide requires a deffinition in `/content/tags/` with the structure:

```
tag-name
  _index.md
```

### Categories

Categories are used in modules, they make use they make use of the Hugo taxonomy system. Any category used in a module requires a deffinition in `/content/categories/` with the structure:

```
category-name
  _index.md
```

The `weight` parameter is used to change the order of the categories in the filter on the modules listing page.

## Deployment

The site is deployed to [netlify](https://www.netlify.com/) which requires PRs to be from github accounts that are linked to a team member in the netlify account.

### Redirects

Redirects are configured in `netlify.toml`

##  Analytics

Historical analytics data can be found in [Google Analytics](https://analytics.google.com/analytics/web/#/p373834203/reports/home) and [Heap](https://heapanalytics.com/app/env/4204607514/dashboard/Testcontainers-Overview-278374). Analytics are no longer being recorded on this site.

## Additional Notes

### Testcontainers Slack channel link

Links to join the Testcontainers community Slack channel can point to `slack.testcontainers.com` or `slack.testcontainers.org`. Both of these subdomains have redirects configured in [Cloudflare Page Rules](https://dash.cloudflare.com/f63a64e586bd3d268acd5a0bb85846f5/testcontainers.com/rules) that point to `https://join.slack.com/t/testcontainers/shared_invite/...`. This link must be refreshed after 400 people have used it to join the channel. When it is refreshed the Page Rules for both domains must be updated to use the new link.

### Testcontainers documentation sites

The core Testcontainers documentation sites ([Java](https://java.testcontainers.org/), [Go](https://golang.testcontainers.org/), [.NET](https://dotnet.testcontainers.org/), [Node.js](https://node.testcontainers.org/)) use a modified MkDocs theme that emulates the testcontainers.com site header and general theme as well as the list of supported languages. Any changes to these three things should be propogated to the documentation sites as well.