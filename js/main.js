$(document).ready(function(){


$('.profileIamge').click(function(){
	$('.profileMenue').toggle();
});

$('.AddLove').on({
    click: function(){
		$('.loveIcon').css('color','#FF008B')
	}

});

$('.SignIn').click(function(){
	$('.loginSection').toggle(),
	$('.loginTitle').toggle(),
	$('.signupSection, .signupTitle').hide();
	
});
$('.SignUp').click(function(){
	$('.signupSection').toggle(),
	$('.signupTitle').toggle(),
	$('.loginSection, .loginTitle').hide();
	
});








});