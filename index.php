<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['form__stat-name'])) {$name = $_POST['form__stat-name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['message'])) {$message = $_POST['message'];}
    $to = "mavpiz@yandex.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nОткуда: $email \n\nОтправитель: $name \n\nТелефон: $phone \n\nСообщение: $message";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо за отправку вашего сообщения! Наши специалисты свяжутся с вами в течение часа.</center>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>