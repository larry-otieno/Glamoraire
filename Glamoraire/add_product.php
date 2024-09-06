<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $description = $conn->real_escape_string($_POST['description']);
    $price = $conn->real_escape_string($_POST['price']);
    $categoryID = (int)$_POST['categoryID'];
    $brandID = (int)$_POST['brandID'];
    $stockQuantity = (int)$_POST['stockQuantity'];
    $imageURL = $conn->real_escape_string($_POST['imageURL']);

    $sql = "INSERT INTO Products (Name, Description, Price, CategoryID, BrandID, StockQuantity, ImageURL) VALUES ('$name', '$description', '$price', $categoryID, $brandID, $stockQuantity, '$imageURL')";

    if ($conn->query($sql) === TRUE) {
        echo "New product added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
