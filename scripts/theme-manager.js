const LOCAL_STORAGE_KEY = 'isDark';
const THEME_CLASS_NAME = 'dark';

const themeChanger = document.querySelector('#theme-changer');

const toggleTheme = () => {
    document.body.classList.toggle(THEME_CLASS_NAME);
    localStorage.setItem(LOCAL_STORAGE_KEY, document.body.classList.contains(THEME_CLASS_NAME) ? 'true' : 'false');
};

if (localStorage.getItem(LOCAL_STORAGE_KEY) === 'true') toggleTheme();

themeChanger.addEventListener('click', toggleTheme);
