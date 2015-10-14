<?php

session_start();

unset($_SESSION['admin']);
session_destroy();
header("HTTP/1.1 307 Temporary Redirect");
header("Location: /login.html");
exit;