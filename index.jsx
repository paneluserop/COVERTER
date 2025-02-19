window.onload = function() {
    const devMessage = document.getElementById("devMessage");
    
    // Show the developer message with animation
    setTimeout(() => {
        devMessage.classList.add("show");
    }, 100); // Slight delay before showing
    
    // Hide the message after 3 seconds with animation
    setTimeout(() => {
        devMessage.classList.remove("show");
        devMessage.classList.add("hide");
    }, 3000); // Message disappears after 3 seconds
}
