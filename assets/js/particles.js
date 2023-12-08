// Snowfall particle configuration
const snowfallConfig = {
    snowflakeCount: 150,
    snowflakeSize: 2,
    minSpeed: 1,
    maxSpeed: 2,
};

// Initialize snowfall particles
function initSnowfallParticles() {
    const container = document.getElementById('snowfall-container');

    for (let i = 0; i < snowfallConfig.snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        container.appendChild(snowflake);

        animateSnowflake(snowflake);
    }
}

// Animate snowflake movement
function animateSnowflake(snowflake) {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const speedY = snowfallConfig.minSpeed + Math.random() * (snowfallConfig.maxSpeed - snowfallConfig.minSpeed);

    snowflake.style.width = `${snowfallConfig.snowflakeSize}px`;
    snowflake.style.height = `${snowfallConfig.snowflakeSize}px`;
    snowflake.style.top = `${startY}px`;
    snowflake.style.left = `${startX}px`;

    function update() {
        const rect = snowflake.getBoundingClientRect();
        const posY = rect.top + speedY;

        if (posY > window.innerHeight) {
            snowflake.style.top = `0px`;
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        } else {
            snowflake.style.top = `${posY}px`;
        }

        requestAnimationFrame(update);
    }

    update();
}

// Initialize snowfall particles on window load
window.onload = initSnowfallParticles;
