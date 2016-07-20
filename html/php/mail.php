<?php 
	
	// your email
	$user_email = "info@example.com";

	$mail = array(
		"name" => htmlspecialchars($_POST['Name']),
		"email" => htmlspecialchars($_POST['Email']),
        "subject"=>htmlspecialchars($_POST['subject']),
		"comments" => htmlspecialchars($_POST['Comments']),
        
	);
	
	function validate($arr){

		return !empty($arr['name']) && strlen($arr['message']) > 20 && filter_var($arr['Email'],FILTER_VALIDATE_EMAIL);

	}

	if(validate($mail)){

		echo mail($user_email, $mail['subject'], 
			"Name : {$mail['name']}\n" 
			."E-mail : {$mail['email']}\n"
			."Comments : {$mail['comments']}" 
		);

	}


?>