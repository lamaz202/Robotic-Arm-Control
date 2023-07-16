<?php
$servername = "localhost";

$dbname = "movement";

$username = "user";

$password = "password";

if (isset($_GET["submit"])) {
    try {

        $conn = new mysqli($servername, $username, $password, $dbname);
        $sql = "SELECT value, date FROM movement WHERE id=(SELECT MAX(id) FROM movement);";
        $result = $conn->query($sql);
        $result = $result->fetch_assoc();
        $value = $result["value"];
        $date = $result["date"];
        $conn->close();
    } catch (Exception $e) {
        $error = "Connection failed";
    }
}
?>