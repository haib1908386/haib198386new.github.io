<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dangnhap.css">
    <title>Đăng Nhập</title>
</head>
<body>
    <form action="login.php" method="post">
        <h2>Đăng Nhập</h2>
        <?php if (isset($_GET['error'])){  ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php }?>
        <label for="">User Name</label>
        <input type="text" name="uname" placeholder="Nhập User Name "><br>

        <label for="">Password</label>
        <input type="password" name="password" placeholder="Nhập Password "><br>

        <button type ="submit">Đăng Nhập</button>
            <a href="dangky.php" class ="ca">Đăng Ký</a>
    </form>
</body>
</html>