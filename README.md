# testcontainers-site
testcontainers.com website

## Development Requirements

1. **Go** 
    
    https://go.dev/

2. **Hugo** *(extended)* 

    https://gohugo.io/

3. **Node.js + NPM** 
    
    https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Development

1. **Import external content** *(optional)* 

    Run `sh dev.sh` from the project root folder.

    The guides and modules are maintined in seperate repositories. If you want to preview the site with that content during development this script will clone and process it.

2. **Run the local server**

    Run `hugo serve` to bring up a local development server that will watch changes and serve a preview at http://localhost:1313/

## External repositories

1. **Community module registry**

    https://github.com/testcontainers/community-module-registry

2. **Guides**

    https://github.com/orgs/testcontainers/repositories?q=tc-guide

    A list of current live and development guides can be found in `build.sh` and `dev.sh`