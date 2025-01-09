// Automatically collect visitor data
const visitorData = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
};

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
