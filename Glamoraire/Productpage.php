<?php
// Example for fetching product data from a database
$product_id = $_GET['id']; // Get product ID from URL

// Database connection and query (replace with your actual database setup)
$conn = new mysqli($host, $username, $password, $dbname);
$sql = "SELECT * FROM products WHERE id = '$product_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Display product details on the page
    echo "<h2>" . $row["name"] . "</h2>";
    echo "<img src='" . $row["image"] . "' alt='" . $row["name"] . "'>";
    echo "<p>" . $row["description"] . "</p>";
    // ... Display price, add to cart button, etc.
} else {
    echo "Product not found.";
}

$conn->close();
?>