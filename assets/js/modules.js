const list = document.querySelector('.modules-list-items');
const all = document.querySelectorAll('.modules-list-item');
const filterEmpty = document.querySelector('.modules-filter-empty');
const clearFilter = document.getElementById('clear-filter');
const inputs = document.querySelectorAll(`.filter-input`);
const search = document.getElementById('modules-search');
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

function showFilterResults() {
    const searchTerm = search.value.trim().toLowerCase().replace(' ', '');
    const officialFilter = document.querySelector(`.filter-input#status-official`).checked;
    const languageFilter = getFilterValues('language');
    const categoryFilter = getFilterValues('category');

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
        if (searchTerm.length > 0 && !module.data.title.toLowerCase().replace(' ', '').includes(searchTerm))
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
filterToggle.addEventListener('click', handleFilterToggle)