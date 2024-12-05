let asia = [];
let africa = [];
let america = [];
let europe = [];
let oceania = [];


fetch("data.json")
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        if (element.region === "Asia") {
            asia.push(element);
        }
        else if (element.region === "Africa") {
            africa.push(element);
        }
        else if (element.region === "America") {
            america.push(element);
        }
        else if (element.region === "Europe") {
            europe.push(element);
        }
        else if (element.region === "Oceania") {
            oceania.push(element);
        }
    });
})

function regionFilter(region) {
    region.map(element => {
        return(`
            <div class="country-card">
                <h2>${element.name}</h2>
                <img src="${element.flag}" alt="${element.name}">
                <p>${element.capital}</p>
                <p>${element.population}</p>
            </div>
        `).join("")
    })
}