<? 
	
	
	
	
	// your email
	$user_email = "info@example.com";

	$mail = array(
		"name" => htmlspecialchars($_POST['Name']),
		"email" => htmlspecialchars($_POST['Email']),
        "subject"=>htmlspecialchars($_POST['subject']),
		"comments" => htmlspecialchars($_POST['Comments']),
        
	);
	
	function validate($arr){

		return !empty($arr['name']) ;

	}
	
	
	if(validate($mail)){

		if( mail($user_email, $mail['subject'], 
			"Name : {$mail['name']}\n" 
			."E-mail : {$mail['email']}\n"
			."Comments : {$mail['comments']}" 
			) )
		{
			echo json_encode( array( "success"=>" E-mail sand " ) );			
		}
		else
			echo json_encode( array( "error"=>" E-mail not sand " ) );
	}
	
	else
			echo json_encode( array( "error"=>" Fill in the fields " ) );

	exit;
?>