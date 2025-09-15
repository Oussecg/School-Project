<?php
include_once "./../class/cnc.php";
session_start();
$cncObj = new Cnc;
$cnc = $cncObj->connect();

if (isset($cnc)){
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $firstName = filter_input(INPUT_POST, "firstName", FILTER_SANITIZE_SPECIAL_CHARS);
        $lastName = filter_input(INPUT_POST, "lastName", FILTER_SANITIZE_SPECIAL_CHARS);
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $hashPass = password_hash($password, PASSWORD_DEFAULT);

        $query = "SELECT adminFirstName, adminLastName FROM admins WHERE adminFirstName = '$firstName' AND adminLastName = '$lastName';";
        try {
            $data = $cnc->query($query);
            if ($data->rowCount() > 0){
                $query = "UPDATE admins
                set adminUsername = '$username',
                adminPassword = '$hashPass'
                WHERE adminFirstName = '$firstName' AND adminLastName = '$lastName'";
                try {
                    $cnc->query($query);
                    $_SESSION["username"] = $username;
                    $_SESSION["password"] = $hashPass;
                    echo "success";
                } catch (\PDOException $th) {
                    echo $th->getMessage();
                }
            }
        } catch (\PDOException $th) {
            echo $th->getMessage();
        }
        $cncObj->close();
    }
} else{
    echo $cnc;
}
?>
