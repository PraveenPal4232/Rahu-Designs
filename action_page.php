<?Php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$email=$_POST['email_id'];
		
		$to='praveenpal4232@gmail.com';
		$subject='It’s easy to get started';
		$message="It’s easy to get started "."Email :".$email;
		$headers="Form: praveenpal4232@gmail.com";
		
		
		if(mail($to, $subject, $message, $headers)){
			header('Location: thanks.html');
		}
		else{
			echo "Something Went Wrong";
		}
	}
?>