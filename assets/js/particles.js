// Fading particle configuration
const fadingParticleConfig = {
    particleCount: 100,
    particleSize: 4,
    fadeInOutSpeed: 0.002, // Adjust the fade in/out speed
};

// Initialize fading particles
function initFadingParticles() {
    const container = document.getElementById('fading-particles-container');

    for (let i = 0; i < fadingParticleConfig.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'fading-particle';
        container.appendChild(particle);

        animateFadingParticle(particle);
    }
}

// Animate fading particle movement
function animateFadingParticle(particle) {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    const speedY = 0.3 * Math.random() + 0.05;

    particle.style.width = `${fadingParticleConfig.particleSize}px`;
    particle.style.height = `${fadingParticleConfig.particleSize}px`;
    particle.style.top = `${startY}px`;
    particle.style.left = `${startX}px`;

    function update() {
        const rect = particle.getBoundingClientRect();
        const posY = rect.top + speedY;

        if (posY > window.innerHeight) {
            particle.style.top = `0px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particle.style.opacity = 0;
        } else {
            particle.style.top = `${posY}px`;
            if (particle.style.opacity < 1) {
                particle.style.opacity = parseFloat(particle.style.opacity) + fadingParticleConfig.fadeInOutSpeed;
            }
        }

        requestAnimationFrame(update);
    }

    update();
}

// Initialize fading particles on window load
window.onload = initFadingParticles;
