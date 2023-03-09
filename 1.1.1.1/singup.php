<?php 
session_start(); 
include "index.php";

if (isset($_POST['uname']) && isset($_POST['password'])
    && isset($_POST['name']) && isset($_POST['re_password'])) {
	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}
	$uname = validate($_POST['uname']);
	$pass = validate($_POST['password']);

	$re_pass = validate($_POST['re_password']);
	$name = validate($_POST['name']);

	$user_data = 'uname='. $uname. '&name='. $name;


	if (empty($uname)) {
		header("Location: dangky.php?error=Tên người dùng là bắt buộc&$user_data");
	    exit();
	}else if(empty($pass)){
        header("Location: dangky.php?error=Mật khẩu là bắt buộc&$user_data");
	    exit();
	}
	else if(empty($re_pass)){
        header("Location: dangky.php?error=Yêu cầu nhập lại password&$user_data");
	    exit();
	}

	else if(empty($name)){
        header("Location: dangky.php?error=Yêu cầu nhập Tên&$user_data");
	    exit();
	}

	else if($pass !== $re_pass){
        header("Location: dangky.php?error=Mật khẩu xác nhận không khớph&$user_data");
	    exit();
	}

	else{

		// hashing the password
        $pass = md5($pass);

	    $sql = "SELECT * FROM users WHERE user_name='$uname' ";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
			header("Location: dangky.php?error=tên người dùng đã được sử dụng&$user_data");
	        exit();
		}else {
           $sql2 = "INSERT INTO users(user_name, password, name) VALUES('$uname', '$pass', '$name')";
           $result2 = mysqli_query($conn, $sql2);
           if ($result2) {
           	 header("Location: dangky.php?success=Tài khoản của bạn đã được tạo thành công");
	         exit();
           }else {
	           	header("Location: dangky.php?error=Xảy ra lỗi&$user_data");
		        exit();
           }
		}
	}
	
}else{
	header("Location: dangky.php");
	exit();
}
?>