<?phprequire_once '../config.php';$data = array();header("Content-Type: application/json");if($_SERVER['REQUEST_METHOD'] == 'POST'){    $name = clear_str($_POST['name']);    $email = clear_str($_POST['email']);    $message = clear_str($_POST['message']);    $recaptcha = $_POST['g-recaptcha-response'];    $ip = $_SERVER['REMOTE_ADDR'];    // ���� �� ������ �������� �����    if(!check_captcha(SECRET_KEY, $recaptcha, $ip)){        $data['status'] = "NO";        $data['mes'] = "����� ��������� �� �����";    } elseif (empty($name) || empty($email) || empty($message)){        $data['status'] = "NO";        $data['mes'] = "��������� ��� ����";    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){        $data['status'] = "NO";        $data['mes'] = "�� ������� �� �������� email";    } else{        $data_send_admin = array(            'subject' => '������ � ����� ��������� �� ���������� '. $name,            'message' => '��������� �� ���������� <a href="mailto:'.$email.'">'.$name.'</a><br /><br />'.$message,            'email_from' => 'agolomazov@itloft.ru',            'name_from'  => '����� ���������',            'email_to'   => 'cesear@bk.ru',            'name_to'    => '������ ����������'        );        $data_send_user = array(            'subject' => '������� �� ���� ���������!',            'message' => '������� ��� �� ���� ������, �� ����� � ���� ��������',            'email_from' => 'agolomazov@itloft.ru',            'name_from'  => '����� ���������',            'email_to'   => $email,            'name_to'    => $name        );        send_message_to_email($data_send_admin);        send_message_to_email($data_send_user);        $data['status'] = "OK";        $data['mes'] = "������ ������� ����������";    }} else {    $data['status'] = "NO";    $data['mes'] = "������������ ��������� � �������";}echo json_encode($data);exit;