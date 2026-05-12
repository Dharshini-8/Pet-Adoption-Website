<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Here you can add code to send the email or store the message in a database
    // For simplicity, let's just display the received data
    echo "<h2>Thank you for your message, $name!</h2>";
    echo "<p>We will contact you at $email shortly.</p>";
}
