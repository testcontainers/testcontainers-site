import Fuse from './fuse.js';

const search = document.querySelector('#guides-search');
const guidesList = document.querySelector('.guides-list-items');
const allGuides = document.querySelectorAll('.guides-list-item');
const searchEmpty = document.querySelector('.guides-search-empty');

const guides = [];

allGuides.forEach((guide) => guides.push({ element: guide, data: JSON.parse(guide.dataset.search) }));

const fuse = new Fuse(guides, { keys: ['data.title', 'data.description', 'data.languages', 'data.tags'], ignoreLocation: true });

function showSearchResults(searchTerm) {
  if (!searchTerm) {
    searchEmpty.classList.remove('show');
    return guidesList.replaceChildren(...guides.map((guide) => guide.element));
  }

  const result = fuse.search(searchTerm);
  const resultElements = result.map((result) => result.item.element);

  guidesList.replaceChildren(...resultElements);

  if (!result.length) {
    searchEmpty.classList.add('show');
  } else {
    searchEmpty.classList.remove('show');
  }
}

search.addEventListener('keyup', (_) => showSearchResults(search.value));