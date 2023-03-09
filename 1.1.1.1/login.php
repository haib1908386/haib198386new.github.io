<?php
    if(isset($_POST['uname']) && isset($_POST['password'])){
        function validate($data){
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        $uname = validate($_POST['uname']);
        $pass = validate($_POST['password']);

        if(empty($uname)) {
            header("Location: dangnhap.php?error=Hãy Nhập User Name");
            exit();  
        }elseif(empty($pass)) {
            header("Location: dangnhap.php?error=Hãy Nhập Password");
            exit();
        }else{
            echo "Hello World";
        }
    }else{
        header("Location: dangnhap.php");
        exit();
    }
?>