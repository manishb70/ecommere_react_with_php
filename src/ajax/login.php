<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

include "./db.php";

$conn = $con;

$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $mobileNo = $_POST['phone'];
    $password = $_POST['password'];

    // Prepare SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE phone = ? AND password = ?");
    $stmt->bind_param("ss", $mobileNo, $password);
    
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            // User found
            $response['success'] = true;
            $response['message'] = "Successfully Logged In";
        } else {
            // User not found
            $response['success'] = false;
            $response['message'] = "Invalid User";
        }
    } else {
        // Query execution failed
        $response['success'] = false;
        $response['message'] = "Database query error: " . $conn->error;
    }

    $stmt->close();
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request method";
}

echo json_encode($response);
?>
