document.addEventListener("DOMContentLoaded", function () {
    const blobCount = 16; // Adjust to ensure full screen coverage
    const background = document.querySelector(".background");

    // Create FPS counter element and add it to the body
    const fpsCounter = document.createElement("div");
    fpsCounter.style.position = "fixed";
    fpsCounter.style.top = "10px";
    fpsCounter.style.left = "10px";
    fpsCounter.style.fontSize = "20px";
    fpsCounter.style.color = "#fff";
    fpsCounter.style.zIndex = "9999";
    fpsCounter.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    fpsCounter.style.padding = "5px";
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

        // Create unique animation for each blob
        const keyframes = `
            @keyframes move${i} {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(${Math.random() * 69 - 6.9}vw, ${Math.random() * 69 - 69}vh) scale(${Math.random() * 6.9 + 0.69}); }
            }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        background.appendChild(blob);
    }
});
