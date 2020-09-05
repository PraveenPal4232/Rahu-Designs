<?Php
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$idea=$_POST['idea'];
		
		$to='praveenpal4232@gmail.com';
		$subject='Query from contact page';
		$message="User info "." Name : ".$name ." Email : ".$email." Phone : ".$phone." Idea : ".$idea;
		$headers="Form: praveenpal4232@gmail.com";
		
		
		if(mail($to, $subject, $message, $headers)){
			header('Location: thanks.html');
		}
		else{
			echo "Something Went Wrong";
		}
	}
?>