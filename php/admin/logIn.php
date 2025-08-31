<?php

include_once "./../class/cnc.php";
session_start();
$cncObj = new Cnc;
$cnc = $cncObj->connect();

if (isset($cnc)){
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
        $hashPass = password_hash($password, PASSWORD_DEFAULT);

        $query = "SELECT adminUsername, adminPassword FROM admins WHERE adminUsername  = '$username';";
        try {
            $data = $cnc->query($query);
            if ($data->rowCount() > 0){
                $sqlPassword = $data->fetch(PDO::FETCH_ASSOC)["adminPassword"];
                if (password_verify($password, $sqlPassword)){
                    $_SESSION["username"] = $username;
                    $_SESSION["password"] = $hashPass;
                    echo "success";
                } else{
                    echo "You password is wrong";
                }
            } else{
                echo "There no acount called $username";
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
