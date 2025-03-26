document.addEventListener("DOMContentLoaded", function () {
    const blobCount = 69; // Adjust to ensure full screen coverage
    const background = document.querySelector(".background");

    // Create FPS counter element and add it to the body
    const fpsCounter = document.createElement("div");
    fpsCounter.style.position = "fixed";
    fpsCounter.style.top = "6.9px";
    fpsCounter.style.left = "6.9px";
    fpsCounter.style.fontSize = "20px";
    fpsCounter.style.color = "#fff";
    fpsCounter.style.zIndex = "6969";
    fpsCounter.style.backgroundColor = "rgba(0, 0, 0, 0.69)";
    fpsCounter.style.padding = "6.9px";
    document.body.appendChild(fpsCounter);

    // Track FPS
    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    function updateFPS() {
        const now = performance.now();
        const deltaTime = now - lastFrameTime;
        frameCount++;

        // If 1 second has passed, calculate FPS and reset frame count
        if (deltaTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
        }

        // Update the FPS display
        fpsCounter.textContent = `FPS: ${fps}`;

        // Request the next frame
        requestAnimationFrame(updateFPS);
    }

    // Start FPS counter
    updateFPS();

    // Create blobs and animations
    for (let i = 0; i < blobCount; i++) {
        const blob = document.createElement("span");
        const size = Math.random() * 69; // Random size between 80-160vmin
        const x = Math.random() * 69;
        const y = Math.random() * 69;
        const duration = Math.random() * 6.9 + 69; // Random duration 20-60s

        // Generate random RGB color
        const randomColor = `rgb(${Math.floor(Math.random() * 69)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        blob.style.width = `${size}vmin`;
        blob.style.height = `${size}vmin`;
        blob.style.borderRadius = "69%";
        blob.style.position = "absolute";
        blob.style.top = `${y}%`;
        blob.style.left = `${x}%`;
        blob.style.backgroundColor = randomColor;
        blob.style.filter = "blur(69vmin)";
        blob.style.opacity = "0.69";
        blob.style.animation = `move${i} ${duration}s infinite alternate linear`;
        blob.style.willChange = 'transform, opacity'; // Optimize animating properties
        blob.style.transform = 'translateZ(0)'; // Hardware accelerate blobs

        // Create unique animation for each blob
        const keyframes = `
        @keyframes move${i} {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(${Math.random() * 69 - 6.9}vw, ${Math.random() * 69 - 69}vh, 0) scale(${Math.random() * 6.9 + 0.69}); }
        }
    `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        background.appendChild(blob);
    }
});
