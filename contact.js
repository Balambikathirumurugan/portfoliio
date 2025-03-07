document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
});
// Function to toggle the menu when clicking the hamburger
function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}
