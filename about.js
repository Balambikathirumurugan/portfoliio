document.querySelector(".btn").addEventListener("click", function() {
    alert("More details coming soon!");
});
// Function to toggle the menu when clicking the hamburger
function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}
