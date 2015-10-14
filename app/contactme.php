<?php
	require_once "../vendor/autoload.php";
	require_once "../vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php";
	// $mail new PHPMailer;

	// $mail->IsSMTP();
	// $mail->Host 		= "smtp.gmail.com";
	// $mail->SMTPAuth 	= true;
	// $mail->SMTPSecure	= "ssl";
	// $mail->Port 		= 465;
	// $mail->CharSet 		= 'UTF-8';

	//собираем данные для отправки
	$name		= $_POST['name'];
	$email 		= $_POST['email'];
	$msg 		= $_POST['message'];
	$kaptcha	= $_POST['g-recaptcha-response'];
	$data 		= array();

    if (send_message_to_email (array ('name' => $name,'email' => $email,'message'=> $msg) ) ) {
        // unlink($file_upload);
        // redirect('Сообщение успешно отправлено', 'alert-success');
		$data['status']='OK';
		$data['text'] ='Ваше письмо успешно отправлено';
    } else {
        // unlink($file_upload);
        // redirect('Ошибка при отправке сообщения');
		$data['status']='error';
		$data['text'] ='Что-то пошло не так письмо не отправлено';
    }

    function send_message_to_email($data){
	    $mail = new PHPMailer;
	    $mail->isSendmail();
	    // Указываем отправителя письма
	    $mail->setFrom('d.pushkarskaya.pr@gmail.com', 'Пушкарской Дарьи');
	    // Указываем получателя письма
	    $mail->addAddress('d.pushkarskaya.pr@gmail.com', "Пушкарской Дарье");
	    // Указываем тему письма
	    $mail->Subject = "Отправка письма с вебинара";
	    // Устанавливаем текст сообщения
	    $mail->msgHTML("Тестовое письмо c моего сайта-портфолио: ".$data['message'].' '.$data['name'].': '.$data['email']);
	    return $mail->send();
	}





	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>