const info = document.querySelector('.country-info');
const mode = document.querySelector('.mode');
const root = document.documentElement;

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

// function openElement(Name){
//   window.location.href = 'country.html';
//   arrElements.forEach(element => {
//       if (element.name === Name) {
//           info.innerHTML += `
//               <img src=${element.flags.png} alt="flag">
//               <div class="details">
//                   <div class="top">
//                       <div class="left">
//                           <h2>${element.name}</h2>
//                           <h4><span>Native Name:</span>${element.nativeName}</h4>
//                           <h4><span>Population:</span>${element.population}</h4>
//                           <h4><span>Region:</span>${element.region}</h4>
//                           <h4><span>Sub Region:</span>${element.subregion}</h4>
//                           <h4><span>Capital:</span>${element.capital}</h4>
//                       </div>
//                       <div class="right">
//                           <h4><span>Top Level Domain:</span>${element.topLevelDomain}</h4>
//                           <h4><span>Currency:</span>${element.currencies[0].name}</h4>
//                           <h4><span>Languages:</span>${element.languages.map(lang => lang.name).join(', ')}</h4>
//                       </div>
//                   </div>
//                   <div class="bottom">
//                       <div class="border-countries">
//                           <h3>Border Countries:</h3>
//                           <div class="btns">
//                           ${element.borders.map(border => `<button class='btnBorder' >${border}</button>`).join('')}
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           `;
//       }
//   });
// }