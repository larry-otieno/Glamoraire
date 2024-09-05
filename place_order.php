<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = (int)$_POST['userID'];
    $totalAmount = $conn->real_escape_string($_POST['totalAmount']);
    $shippingAddressID = (int)$_POST['shippingAddressID'];
    $billingAddressID = (int)$_POST['billingAddressID'];

    $sql = "INSERT INTO Orders (UserID, OrderDate, ShippingAddressID, BillingAddressID, TotalAmount, OrderStatus) VALUES ($userID, NOW(), $shippingAddressID, $billingAddressID, '$totalAmount', 'Pending')";

    if ($conn->query($sql) === TRUE) {
        $orderID = $conn->insert_id;

        // Process each item from cart and insert into OrderItems
        $cartItemsSql = "SELECT * FROM CartItems WHERE CartID = (SELECT CartID FROM Carts WHERE UserID = $userID)";
        $cartItemsResult = $conn->query($cartItemsSql);

        while ($item = $cartItemsResult->fetch_assoc()) {
            $productID = (int)$item['ProductID'];
            $quantity = (int)$item['Quantity'];
            $priceAtPurchase = $item['PriceAtPurchase'];

            $orderItemSql = "INSERT INTO OrderItems (OrderID, ProductID, Quantity, PriceAtPurchase) VALUES ($orderID, $productID, $quantity, '$priceAtPurchase')";
            $conn->query($orderItemSql);
        }

        echo "Order placed successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
