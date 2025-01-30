document.addEventListener("DOMContentLoaded", function () {
    const blobCount = 40; // Adjust to ensure full screen coverage
    const background = document.querySelector(".background");

    for (let i = 0; i < blobCount; i++) {
        const blob = document.createElement("span");
        const size = Math.random() * 80; // Random size between 80-160vmin
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 40 + 20; // Random duration 20-60s

        // Generate random RGB color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        blob.style.width = `${size}vmin`;
        blob.style.height = `${size}vmin`;
        blob.style.borderRadius = "50%";
        blob.style.position = "absolute";
        blob.style.top = `${y}%`;
        blob.style.left = `${x}%`;
        blob.style.backgroundColor = randomColor;
        blob.style.filter = "blur(1000vmin)";
        blob.style.opacity = "0.8";
        blob.style.animation = `move${i} ${duration}s infinite alternate linear`;

        // Create unique animation for each blob
        const keyframes = `
            @keyframes move${i} {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(${Math.random() * 50 - 25}vw, ${Math.random() * 50 - 25}vh) scale(${Math.random() * 1.5 + 0.5}); }
            }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        background.appendChild(blob);
    }
});
