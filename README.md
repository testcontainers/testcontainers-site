# testcontainers-site
testcontainers.com website

## External repositories

## Community module registry

https://github.com/testcontainers/community-module-registry

## Guides

https://github.com/orgs/testcontainers/repositories?q=tc-guide

A list of current live and development guides can be found in `build.sh` and `dev.sh`

## Development Requirements

### Go
    
https://go.dev/

### Hugo *(extended)* 

https://gohugo.io/

### Node.js + NPM
    
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Development

### Running the project locally

1. **Import external content** *(optional)* 

    Run `sh dev.sh` from the project root folder.

    The guides and modules are maintined in seperate repositories. If you want to preview the site with that content during development this script will clone and process it.

2. **Run the local server**

    Run `hugo serve` to bring up a local development server that will watch changes and serve a preview at http://localhost:1313/ 

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

### Programming Languages

Acrosss the site we make references to programming languages. This might mean we need the language logo or title or the link to the TC implementation in that language. To cut down on duplication we store all of this information in `/data/languages.yml` and refrerence it in templates.

This list should be kept up to date and include any language that is reference in guide or module.

Languages must have an `order` which controls the order they are listed in templates.

*In Hugo dictionaries are converted to maps when used in `range` loops and are by default sorted alphabetically so we use the `order` param and a `sort` in the range to control it*.

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