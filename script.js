const container = document.querySelector('#countries');
const regionMenu = document.querySelector('#regionMenu');
const searchInput = document.querySelector('#searchInput');

const mode = document.querySelector('.mode');
const root = document.documentElement;

async function filterAndSearch(query, category) {
    try {
        const response = await fetch('data.json');
        const elements = await response.json();
        const filteredElements = elements.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase()) && 
                (category === 'all' || element.region === category);
        });
        populateItemList(filteredElements);
    } catch (error) {
        console.error('Error fetching or filtering elements:', error);
    }
}

function populateItemList(elements) {
    container.innerHTML = '';
    elements.forEach(element => {
        container.innerHTML += `
            <div class="item">
                <img src=${element.flags.png} alt="flag">
                <div class="text">
                    <h2>${element.name}</h2>
                    <h4><span>Population:</span>${element.population}</h4>
                    <h4><span>Region:</span>${element.region}</h4>
                    <h4><span>Capital:</span>${element.capital}</h4>
                </div>
            </div> `
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const category = regionMenu.value;
    filterAndSearch(query, category);
});
regionMenu.addEventListener('change', () => {
    const query = searchInput.value;
    const category = regionMenu.value;
    filterAndSearch(query, category);
});
filterAndSearch('', 'all');

mode.addEventListener('click', () => {
    mode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    root.style.setProperty('--White', '#111517');
    root.style.setProperty('--Very-Dark-Blue', '#fafafa');
    root.style.setProperty('--Dark-Blue', '#ffffff');
});