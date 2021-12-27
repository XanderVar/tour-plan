<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма

if (isset($_POST['email']))
{
  $title = "Заявка на подписку Best Tour Plan";
$body = "
<h2>Новая заявка на подписку Best Tour Plan</h2>
<b>email:</br><br>$email
";

}

else 
{
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение Best Tour Plan</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message";

}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'alenichev-training.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'admin@alenichev-training.ru'; // Логин на почте
    $mail->Password   = 'Xander_var300489'; // Пароль на почте
  
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('admin@alenichev-training.ru', 'Alexander Alenichev'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('xander_var@mail.ru');  
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');