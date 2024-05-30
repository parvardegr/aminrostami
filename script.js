document.addEventListener('DOMContentLoaded', () => {
    // Set the name from the CSS variable
    const name = getComputedStyle(document.documentElement).getPropertyValue('--name').trim();
    const jobTitle = getComputedStyle(document.documentElement).getPropertyValue('--job-title').trim();
    document.getElementById('logo').textContent = name;
    document.getElementById('hero-title').textContent = `Hello, I'm ${name}, a ${jobTitle}`;

    const toggleThemeButton = document.querySelector('#toggle-theme');

    toggleThemeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });
});
