<?php
    // Retrieve the variable from the GET request
    if (isset($_GET['variable_name'])) {
        $variable = $_GET['variable_name'];

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

        // Prepare and execute the query to insert the variable into the database
        $sql = "INSERT INTO variables (variable_name) VALUES ('$variable')";
        if ($conn->query($sql) === TRUE) {
            echo "Variable stored successfully.";
        } else {
            echo "Error storing variable: " . $conn->error;
        }

        // Close the database connection
        $conn->close();
    } else {
        echo "No variable received.";
    }
    ?>