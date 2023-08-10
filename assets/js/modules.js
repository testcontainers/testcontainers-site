const list = document.querySelector('.modules-list-items');
const all = document.querySelectorAll('.modules-list-item');
const filterEmpty = document.querySelector('.modules-filter-empty');
const clearFilter = document.getElementById('clear-filter');
const inputs = document.querySelectorAll(`.filter-input`);
const search = document.getElementById('modules-search');
const official = document.querySelector(`.filter-input#status-official`);
const filterToggle = document.getElementById('filter-toggle');

const modules = [];
all.forEach((module) => modules.push({ element: module, data: JSON.parse(module.dataset.filter) }));

function getFilterValues(filterPrefix) {
    const inputs = document.querySelectorAll(`.filter-input[id^='${filterPrefix}-']`);
    const filters = [];
    inputs.forEach((input) => {
        const id = input.id.replace(`${filterPrefix}-`, '');
        if (id != 'all' && input.checked) filters.push(id);
    });
    return filters;
}

function setFilterValues(filterPrefix, value) {
    if (!value) value = 'all';
    inputs.forEach((input) => {
        const id = `${filterPrefix}-${value}`;
        if (id == input.id) input.checked = true;
    });
}

function getUrlFilter() {
    const searchParams = new URLSearchParams(window.location.search);
    search.value = searchParams.get('s') ?? '';
    official.checked = searchParams.get('official') === "true";
    setFilterValues('language', searchParams.get('language'));
    setFilterValues('category', searchParams.get('category'));
    showFilterResults(false);
}

function updateUrlFilter(url, label, value) {
    if (value) {
        url.searchParams.set(label, value);
    } else {
        url.searchParams.delete(label);
    }
}

function showFilterResults(replaceState = true) {
    const searchTerm = search.value.trim().toLowerCase().replaceAll(' ', '');
    const officialFilter = document.querySelector(`.filter-input#status-official`).checked;
    const languageFilter = getFilterValues('language');
    const categoryFilter = getFilterValues('category');

    if (replaceState) {
        const url = new URL(location);
        updateUrlFilter(url, 's', search.value);
        updateUrlFilter(url, 'official', officialFilter);
        updateUrlFilter(url, 'language', languageFilter[0]);
        updateUrlFilter(url, 'category', categoryFilter[0]);
        history.replaceState({}, "", url);
    }
    
    if (!(officialFilter || languageFilter.length > 0 || categoryFilter.length > 0 || searchTerm.length > 0)) {
        filterEmpty.classList.remove('show');
        clearFilter.disabled = true;
        return list.replaceChildren(...modules.map((module) => module.element));
    }

    const result = modules.filter((module) => {
        let show = true;
        if (officialFilter && !module.data.official) 
            show = false;
        if (languageFilter.length > 0 && !languageFilter.some((langauge) => module.data.languages.includes(langauge))) 
            show = false;
        if (categoryFilter.length > 0 && !module.data.categories.some((category) => categoryFilter.includes(category))) 
            show = false;
        if (
            searchTerm.length > 0 && 
            !module.data.title.toLowerCase().replaceAll(' ', '').includes(searchTerm) && 
            !module.data.description.toLowerCase().replaceAll(' ', '').includes(searchTerm)
        )
            show = false;
        return show;
    });
    const resultElements = result.map((result) => result.element);

    list.replaceChildren(...resultElements);

    if (!result.length) {
        filterEmpty.classList.add('show');
    } else {
        filterEmpty.classList.remove('show');
    }

    clearFilter.disabled = false;
}

function clearTheFilter() {
    search.value = '';
    inputs.forEach((input) => {
        input.checked = input.id === 'language-all' || input.id === 'category-all';
    });
    showFilterResults();
}

function handleFilterToggle() {
    document.body.classList.toggle('filter-toggled');
}

inputs.forEach((input) => {
    input.addEventListener('change', showFilterResults);
})
search.addEventListener('keyup', showFilterResults);
clearFilter.addEventListener('click', clearTheFilter);
filterToggle.addEventListener('click', handleFilterToggle);
window.addEventListener("popstate", getUrlFilter);
getUrlFilter();