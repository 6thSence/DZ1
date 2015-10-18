<!DOCTYPE html>
<html lang="ru_RU">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <title><?php echo $data['title']; ?></title>
    <meta name="description" content="loftschool_homework">
    <meta name="keywords" content="loftschool_homework">
    <meta name="author" content="Пушкарская Дарья">
    <link href="./css/image/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="./css/vendor.min.css">
    <link rel="stylesheet" href="./css/fonts.min.css">
    <?php if($page == "index"): ?>
        <link rel="stylesheet" href="./css/main.index.min.css">
    <?php endif; ?>
    <?php if($page == "contacts"): ?>
        <link rel="stylesheet" href="./css/main.contact.min.css">
    <?php endif; ?>
    <?php if($page == "portfolio"): ?>
        <link rel="stylesheet" href="./css/main.min.css">
    <?php endif; ?>
    <?php if($page == "auth"): ?>
        <link rel="stylesheet" href="./css/main.login.min.css">
    <?php endif; ?>
    <script src="./js/modernizr.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body class="my_body">
<!--[if lt IE 7]>
<p class="browsehappy">Ваш браузер <strong>устарел</strong>. Пожалуйста <a href="http://browsehappy.com/">Обновите</a> его.</p>
<![endif]-->