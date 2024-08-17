// Specify the folder containing the images
//const folderPath = 'ASS/';

// Specify the number of images in the folder
//const totalImages = 4; // Adjust this number to match the number of images in your folder

// Generate an array of image paths dynamically
//const images = [];
//for (let i = 1; i <= totalImages; i++) {
//images.push(`${folderPath}image${i}.jpg`);
//}

// Function to set a random background image
//function setRandomBackgroundImage() {
//const randomIndex = Math.floor(Math.random() * images.length);
//const selectedImage = images[randomIndex];
//document.body.style.backgroundImage = `url('${selectedImage}')`;
//}

// Set a random background image on page load
//window.onload = setRandomBackgroundImage;

// Optionally, change background image at intervals
//setInterval(setRandomBackgroundImage, 2000); // Change every 5 seconds


















// Request notification permission immediately
Notification.requestPermission().then(perm => {
    // Check if permission is granted
    if (perm === "granted") {
        // Set a timeout to send the notification after 1 hour (3600000 milliseconds)
        setTimeout(() => {
            const notification = new Notification("working", {
                body: "live.",
                icon: "ASS\image2.jpg", // Optional: Set the icon if needed
                data: { hello: "hello" }
            });

            // Optionally handle errors in the notification
            notification.addEventListener("error", e => {
                alert("Notification error");
            });
        }, 100000); // 3600000 milliseconds = 1 hour
    }
});



























