<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $orderID = (int)$_POST['orderID'];
    $paymentAmount = $conn->real_escape_string($_POST['paymentAmount']);
    $paymentMethod = $conn->real_escape_string($_POST['paymentMethod']);
    $paymentStatus = $conn->real_escape_string($_POST['paymentStatus']);

    $sql = "INSERT INTO Payments (OrderID, PaymentDate, PaymentAmount, PaymentMethod, PaymentStatus) VALUES ($orderID, NOW(), '$paymentAmount', '$paymentMethod', '$paymentStatus')";

    if ($conn->query($sql) === TRUE) {
        echo "Payment recorded successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
