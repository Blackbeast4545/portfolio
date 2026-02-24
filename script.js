// Lenis Removed - Using Native Scroll
// ScrollReveal still handles the entry animations
const sr = ScrollReveal({ 
    distance: '60px', 
    duration: 1500, 
    delay: 200, 
    reset: false 
});

sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });

// Native Parallax Effect for Background
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const video = document.getElementById('heroVideo');
    // Subtle shift to maintain performance
    video.style.transform = `translateY(${scroll * 0.15}px)`;
});
