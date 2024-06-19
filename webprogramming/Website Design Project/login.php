<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Connect to your database (replace with your actual database credentials)
  $conn = new mysqli("localhost", "username", "password", "database_name");

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Prepare and execute SQL query to check credentials
  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
  $stmt->bind_param("ss", $username, $password);
  $stmt->execute();

  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    // User found, set session variable and redirect to home page
    $_SESSION["logged_in"] = true;
    header("Location: home.php");
  } else {
    // Invalid credentials, display error message
    echo "Invalid username or password.";
  }

  $stmt->close();
  $conn->close();
}
?>