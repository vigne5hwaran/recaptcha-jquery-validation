<?php
require("vendor/phpmailer/phpmailer/src/PHPMailer.php");
require("vendor/phpmailer/phpmailer/src/SMTP.php");

$secretKey = "your_private_key";
$responseKey = $_POST['g-recaptcha-response'];
$userIP = $_SERVER['REMOTE_ADDR'];
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
$response = file_get_contents($url);
$response = json_decode($response);


if(isset($_POST['submit'])){
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    if($response -> success) {
       
       //From email address and name
        $mail->From = "info@example.com";
        $mail->FromName = "Enquiry";

        //To address and name
        $mail->addAddress("example@gmail.com");
        $mail->addAddress("example@gmail.com"); //Recipient name is optional

        //Address to which recipient will reply
        $mail->addReplyTo($_POST['email'], "Reply");

        //CC and BCC
        $mail->addCC("cc@example.com");
        $mail->addBCC("bcc@example.com");

        //Send HTML or Plain Text email
        $mail->isHTML(true);

        $mail->Subject = "Enquiry From example.com";
        $mail->Body = "<html>
            <head>
                <title>HTML email</title>
            </head>
            <body>
                <table>
                    <tr>
                        <td><strong>Full Name</strong></td><td>:</td><td>".$_POST['name']."</td>					
                    </tr>
                    <tr>
                        <td><strong>Email ID</strong></td><td>:</td><td>".$_POST['email']."</td>					
                    </tr>
                    <tr>
                        <td><strong>Subject</strong></td><td>:</td><td>".$_POST['subject']."</td>					
                    </tr>
                    <tr>
                        <td><strong>Mobile</strong></td><td>:</td><td>".$_POST['mobile']."</td>					
                    </tr>
                    <tr>
                        <td><strong>Message</strong></td><td>:</td><td>".$_POST['message']."</td>					
                    </tr>
                </table>
            </body>
        </html>";
        $mail->AltBody = "This is the plain text version of the email content for Testing.";

        if(!$mail->send()) 
        {
            echo "<script>
                    alert('Sorry mail was not send due to some server problem, please try again later!');
                    window.history.back();
                </script>";
                // echo $mail->ErrorInfo;
        } 
        else 
        {
            echo "<script>
                    alert('Email Sent Successfully!');
                    window.history.back();
                </script>";
        }
       
    } else {
         echo "<script>
                alert('Please Check the recaptcha and Try again');
                window.history.back();
            </script>";
    }
}
?>
