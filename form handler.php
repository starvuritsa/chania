<?php
$name = $_POST['name']
$visitor_email=$_POST['email'];
$book_name=$_POST['book name'];
$message=$_POST['message'];

$email_from ='starvuritsab@gmail.com';
$email_book_name ='new form submission';
$email_body ="user name: $name.\n".
            ="user email: $visitor_email.\n".
            ="book name: $book_name.\n".
            ="user message:$message.\n";

 $to ='edithk@gmail.com';
 $headers = "from: $email_from\r\n";
 $headers ="reply-to: $visitor_email\r\n";
 mail($to,$email_book_name,$email_body,$headers);
 header("location:contact.html");
?>