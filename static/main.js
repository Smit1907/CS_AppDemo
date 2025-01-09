// Automatically collect visitor data
const visitorData = {
    userAgent: navigator.userAgent,                     // Browser and OS information
    language: navigator.language,                      // Language settings
    platform: navigator.platform,                      // Platform (e.g., Win32, MacIntel)
    screenResolution: `${window.screen.width}x${window.screen.height}`, // Screen resolution
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,         // Viewport size
    referrer: document.referrer,                       // Referring page
    timestamp: new Date().toISOString(),               // Timestamp of the visit
    cookiesEnabled: navigator.cookieEnabled,           // Are cookies enabled?
    javaEnabled: navigator.javaEnabled(),              // Is Java enabled?
    colorDepth: window.screen.colorDepth,              // Color depth of the screen
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // User's timezone
    connectionType: navigator.connection ? navigator.connection.effectiveType : "unknown", // Connection type (if supported)
    deviceMemory: navigator.deviceMemory || "unknown", // Device memory (if supported)
    hardwareConcurrency: navigator.hardwareConcurrency || "unknown", // Number of CPU cores
    onlineStatus: navigator.onLine ? "online" : "offline", // Online/offline status
};

// Log the collected data in the console
console.log("Collected Visitor Data:", visitorData);

// Send the data to the backend
fetch("/collect", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(visitorData),
})
    .then(response => response.json())
    .then(data => console.log("Data sent to server:", data))
    .catch(error => console.error("Error:", error));
