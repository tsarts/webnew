<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "123@iki", "review_system");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $username = $_POST["username"];
    $rating = $_POST["rating"];
    $comment = $_POST["comment"];

    // Insert data into the reviews table
    $sql = "INSERT INTO reviews (username, rating, comment) VALUES ('$username', $rating, '$comment')";
    if ($conn->query($sql) === TRUE) {
        echo "Review submitted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>