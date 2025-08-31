<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] === "POST"){
    if (isset($_SESSION["username"]) && isset($_SESSION["password"])){
        echo "success";
    }
}
?>
