document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For testing purposes, log the values to the console
        console.log("Username:", username);
        console.log("Password:", password);

        // Optionally, you can add code here to send the username and password to the server for authentication
        // Once authenticated, you can redirect the user to another page

        // For now, let's just log a message to indicate that the form submission was handled
        console.log("Form submitted!");
    });
});


       

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const loginForm = document.getElementById('login-form');

    loginButton.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
    });
});


// JavaScript for handling the login button click event
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function() {
        alert('Login button clicked!');
        // Add your login logic here
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("home-btn");
    const homePage = document.getElementById("home-page");

    homeBtn.addEventListener("click", function() {
        // Hide other pages and show the home page
        document.querySelectorAll("main").forEach(function(page) {
            page.classList.add("hidden");
        });
        homePage.classList.remove("hidden");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("home-btn");
    const homePage = document.getElementById("home-page");

    homeBtn.addEventListener("click", function() {
        // Hide other pages and show the home page
        document.querySelectorAll("main").forEach(function(page) {
            page.classList.add("hidden");
        });
        homePage.classList.remove("hidden");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.getElementById("login-form");

    loginBtn.addEventListener("click", function() {
        loginForm.classList.toggle("hidden");
    });
});


