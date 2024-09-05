// this code provides a basic search functionality with suggestions that update as the user types
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');

searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length > 2) {
        const response = await fetch(`/api/search?q=${searchTerm}`);
        const data = await response.json();
        renderSearchSuggestions(data);
    }
    else {
        clearSearchSuggestions();
    }
});

searchSuggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const productId = e.target.dataset.productId;
        window.location.href = `/products/${productId}`;
    }
});

function renderSearchSuggestions(data) {
    searchSuggestions.innerHTML = '';
    data.forEach((product) => {
        const li = document.createElement('LI');
        li.textContent = product.name;
        li.dataset.productId = product.id;
        searchSuggestions.appendChild(li);
    });
}
function clearSearchSuggestions() {
    searchSuggestions.innerHTML = '';
}