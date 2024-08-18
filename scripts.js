// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});