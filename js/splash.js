// Splash screen logic
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-loader");
    if (!splash) return;

    // Check if the user has already seen the splash screen this session
    if (sessionStorage.getItem("splashSeen")) {
        splash.style.display = "none";
        return;
    }

    // Mark as seen for this session
    sessionStorage.setItem("splashSeen", "true");

    // The CSS animation takes about 2.5s. We'll fade out the splash after that.
    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transition = "opacity 0.8s ease-out";
        
        // Remove from DOM after fade out
        setTimeout(() => {
            splash.style.display = "none";
        }, 800);
    }, 2500);
});
