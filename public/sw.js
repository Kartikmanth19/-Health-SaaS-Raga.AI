self.addEventListener("install", () => {
    console.log("SW Installed");
});

self.addEventListener("activate", () => {
    console.log("SW Active");
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow("/patients")
    );
});