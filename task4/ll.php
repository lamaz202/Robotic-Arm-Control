<?php
    // Database connection details
    $servername = "localhost";
    $username = "root";  // Default username for XAMPP
    $password = "";      // Default password for XAMPP
    $dbname = "get";  // Replace with your database name

    // Create a new connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve the stored variable from the database
    $sql = "SELECT variable_name FROM get ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $variable = $row["variable_name"];
        echo "Stored variable: " . $variable;
    } else {
        echo "No variable stored.";
    }

    // Close the database connection
    $conn->close();
    ?>