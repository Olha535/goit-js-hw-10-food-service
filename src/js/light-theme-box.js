const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);
const themeSwitchToggleEl = document.querySelector('theme-switch__toggle');
themeSwitchToggleEl.addEventListener('change', onThemeSwitch);

function onThemeSwitch(evt) {
  if (themeSwitchToggleEl.checked) {
    localStorage.setItem('theme', Theme.Dark);
    //localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.Dark);
}

function onDarkTheme() {
  localStorage.theme === Theme.LIGHT
    ? (themeSwitchToggleEl.checked = false)
    : (themeSwitchToggleEl.checked = true);
}
