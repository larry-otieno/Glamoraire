<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = (int)$_POST['userID'];
    $productID = (int)$_POST['productID'];
    $quantity = (int)$_POST['quantity'];

    // Check if the cart already exists
    $cartSql = "SELECT CartID FROM Carts WHERE UserID = $userID";
    $cartResult = $conn->query($cartSql);
    
    if ($cartResult->num_rows > 0) {
        $cartID = $cartResult->fetch_assoc()['CartID'];
    } else {
        // Create new cart if not exists
        $conn->query("INSERT INTO Carts (UserID, CreatedDate) VALUES ($userID, NOW())");
        $cartID = $conn->insert_id;
    }

    // Add item to the cart
    $cartItemSql = "INSERT INTO CartItems (CartID, ProductID, Quantity) VALUES ($cartID, $productID, $quantity) ON DUPLICATE KEY UPDATE Quantity = Quantity + $quantity";
    
    if ($conn->query($cartItemSql) === TRUE) {
        echo "Item added to cart successfully";
    } else {
        echo "Error: " . $cartItemSql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
