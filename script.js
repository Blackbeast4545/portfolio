const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

const sr = ScrollReveal({ distance: '60px', duration: 1500, delay: 200, reset: false });
sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    document.getElementById('heroVideo').style.transform = `translateY(${scroll * 0.4}px)`;
});