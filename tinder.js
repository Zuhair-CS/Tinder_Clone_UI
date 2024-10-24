const fadeElement = document.querySelector('.scroll');  
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const opacity = Math.max(0, 1 - (scrollPosition / (maxScroll/2)));
    fadeElement.style.opacity = opacity;
});