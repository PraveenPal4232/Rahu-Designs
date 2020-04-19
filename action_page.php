<?Php
	if(isset($_POST['submit'])){
		$email=$_POST['email'];
		
		$to='praveenpal4232@gmail.com';
		$subject='It’s easy to get started';
		$message="It’s easy to get started for'".$email."'";
		$headers="Form: praveenpal4232@gmail.com";
		
		if(mail($to, $subject, $message, $headers)){
			header('Location: thanks.html');
		}
		else{
			echo "Something Went Wrong";
		}
	}
?>