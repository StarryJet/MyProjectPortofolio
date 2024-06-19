function showAbout() {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}
