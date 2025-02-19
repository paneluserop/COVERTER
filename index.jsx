window.onload = function() {
    const devMessage = document.getElementById("devMessage");
    devMessage.style.display = "block"; // Show the developer message
    setTimeout(() => {
        devMessage.style.display = "none"; // Hide after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
}
