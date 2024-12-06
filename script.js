const container = document.querySelector('#countries');
const regionMenu = document.querySelector('#regionMenu');
const searchInput = document.querySelector('#searchInput');
// import info from "./test.js";

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
            <div onclick="openElement('${element.name}')" class="item">
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

function modeChange() {
    const checkColor = getComputedStyle(root).getPropertyValue('--White');
    if (checkColor === '#111517') {
        mode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        root.style.setProperty('--White', '#ffffff');
        root.style.setProperty('--Very-Dark-Blue', '#202c37');
        root.style.setProperty('--Dark-Blue', '#2b3945');
    } else {
        mode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        root.style.setProperty('--White', '#111517');
        root.style.setProperty('--Very-Dark-Blue', '#fafafa');
        root.style.setProperty('--Dark-Blue', '#ffffff');
    }
};

async function openElement(Name){
    try {
        const response = await fetch('data.json');
        const elements = await response.json();
        const element = elements.filter(el => {
            return el.name.toLowerCase() === Name.toLowerCase();
        });
        info.innerHTML += `
                <img src=${element.flags.png} alt="flag">
                <div class="details">
                    <div class="top">
                        <div class="left">
                            <h2>${element.name}</h2>
                            <h4><span>Native Name:</span>${element.nativeName}</h4>
                            <h4><span>Population:</span>${element.population}</h4>
                            <h4><span>Region:</span>${element.region}</h4>
                            <h4><span>Sub Region:</span>${element.subregion}</h4>
                            <h4><span>Capital:</span>${element.capital}</h4>
                        </div>
                        <div class="right">
                            <h4><span>Top Level Domain:</span>${element.topLevelDomain}</h4>
                            <h4><span>Currency:</span>${element.currencies[0].name}</h4>
                            <h4><span>Languages:</span>${element.languages.map(lang => lang.name).join(', ')}</h4>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="border-countries">
                            <h3>Border Countries:</h3>
                            <div class="btns">
                            ${element.borders.map(border => `<button class='btnBorder' >${border}</button>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
    } catch (error) {
        console.error('Error fetching or filtering elements:', error);
    }
    window.location.href = 'country.html';
}