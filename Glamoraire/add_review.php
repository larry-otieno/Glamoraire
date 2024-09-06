<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $productID = (int)$_POST['productID'];
    $userID = (int)$_POST['userID'];
    $rating = (int)$_POST['rating'];
    $comment = $conn->real_escape_string($_POST['comment']);

    $sql = "INSERT INTO Reviews (ProductID, UserID, Rating, Comment, ReviewDate) VALUES ($productID, $userID, $rating, '$comment', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo "Review added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
