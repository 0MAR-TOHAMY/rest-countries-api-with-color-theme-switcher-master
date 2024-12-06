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

export default info;