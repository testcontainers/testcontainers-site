const body = document.body;
const siteSearchInput = document.getElementById("search-input");
const siteSearchResults = document.getElementById("site-search-results");
const siteSearchClose = document.getElementById("site-search-close");
const siteSearchCloseCatcher = document.getElementById("site-search-close-catcher");
const headerSearchToggle = document.getElementById("header-search-toggle");

siteSearchClose.addEventListener("click", () => closeSearch());
siteSearchCloseCatcher.addEventListener("click", () => closeSearch());
headerSearchToggle.addEventListener("click", () => openSearch());
window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "K" || e.key === "k")) {
		e.preventDefault();
		toggleSearch();
	}
});
siteSearchInput.addEventListener("keyup", () => doSearch(siteSearchInput.value));

let pagefind = null;
async function initSearch() {
    if (pagefind != null) return;
    pagefind = await import("/_pagefind/pagefind.js");
}
initSearch();

function openSearch() {
    body.classList.add("show-site-search");
    siteSearchInput.focus();
}

function closeSearch() {
    body.classList.remove("show-site-search");
    siteSearchInput.value = "";
    siteSearchResults.innerHTML = "";
    siteSearchInput.blur();
}

function toggleSearch() {
    if (body.classList.contains("show-site-search")) {
        closeSearch();
    } else {
        openSearch();
    }
}

async function doSearch(searchTerm) {
    const search = await pagefind.debouncedSearch(searchTerm);
    if (search != null) {
        const results = await Promise.all(search.results.map(r => r.data()));
        console.log(results);
        showResults(results);
    }
}

function showResults(results) {
    siteSearchResults.innerHTML = "";

    const guides = results.filter(item => {
        return item.filters?.type[0] == "Guide";
    });

    const modules = results.filter(item => {
        return item.filters?.type[0] == "Module";
    });

    console.log(guides);

    if (guides.length > 0) {
        siteSearchResults.insertAdjacentHTML('beforeend', `<div class="search-filter-item"><span class="title">Guides</span><div class="results">${resultsHtml(guides)}</div></div>`);
    }

    if (modules.length > 0) {
        siteSearchResults.insertAdjacentHTML('beforeend', `<div class="search-filter-item"><span class="title">Modules</span><div class="results">${resultsHtml(modules)}</div></div>`);
    }
    
}

function resultsHtml(results) {
    let resultHtml = "";
    results.forEach(element => {
        const subresults = element.sub_results?.map(item => {
            return `<div class="subresult-item">
                <a href="${item.url}">
                    <span class="title">${item.title}</span>
                    <div class="excerpt">${item.excerpt}</div>
                </a>
            </div>`
        });
        resultHtml += `<div class="result-item">
            <a href="${element.url}">
                <span class="title">${element.meta.title}</span>
                <div class="excerpt">${element.excerpt}</div>
            </a>
            <div class="subresults">${subresults?.join("")}</div>
        </div>`;
    });
    return resultHtml;
}