const lightSwitches = document.querySelectorAll('.theme-switch');
if (lightSwitches.length > 0) {
    lightSwitches.forEach((lightSwitch, i) => {
        if (localStorage.getItem('dark-mode') === 'true') {
            lightSwitch.checked = true;
        }
        lightSwitch.addEventListener('change', () => {
            const { checked } = lightSwitch;
            lightSwitches.forEach((el, n) => {
                if (n !== i) {
                    el.checked = checked;
                }
            });
            if (lightSwitch.checked) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('dark-mode', true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('dark-mode', false);
            }
        });
    });
}

if (!localStorage.getItem('dark-mode')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        lightSwitches[0].checked = true;
    } else {
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const englishButton = document.getElementById('menu-item-english');
    const spanishButton = document.getElementById('menu-item-spanish');

    menuButton.addEventListener('click', function () {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('hidden');
    });

    // Close the dropdown menu if clicking outside of it
    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            menuButton.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.add('hidden');
        }
    });

    menuButton.click();

    let lang = navigator.language || navigator.userLanguage;
    let enList = document.getElementsByClassName('en');
    let esList = document.getElementsByClassName('es');

    function toEnglish() {
        for (const enInstance of enList) {
            enInstance.classList.remove('hidden');
        }
        for (const esInstance of esList) {
            esInstance.classList.add('hidden');
        }
        englishButton.classList.add('btn-active');
        spanishButton.classList.remove('btn-active');
    }

    function toSpanish() {
        for (const enInstance of enList) {
            enInstance.classList.add('hidden');
        }
        for (const esInstance of esList) {
            esInstance.classList.remove('hidden');
        }
        spanishButton.classList.add('btn-active');
        englishButton.classList.remove('btn-active');
    }

    if (lang.startsWith('en')){
        toEnglish();
    } else if (lang.startsWith('es')) {
        toSpanish();
    } else {
        toEnglish();
    }

    spanishButton.onclick = (e) => {
        toSpanish();
    }
    englishButton.onclick = (e) => {
        toEnglish();
    }

});
