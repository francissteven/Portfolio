<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = SMTP::DEBUG_OFF;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kikoalmine@gmail.com';
        $mail->Password = 'doix yixb dfms xjwr';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name); // Set the sender's name and email
        $mail->addAddress('kikoalmine@gmail.com'); // Set the receiver's email
        $mail->isHTML(false);
        $mail->Subject = 'Contact Us Message';
        $mail->Body = "Name: $name\nSubject: $subject\nEmail: $email\nMessage: $message";

        $mail->send();
        echo 'Message has been sent successfully! <a href="index.html">Go to Homepage.</a>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        echo '<br>';
        echo '<a href="index.html">Go to Homepage.</a>';
    }
}
?>