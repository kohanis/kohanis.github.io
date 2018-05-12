function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function sendAjaxForm(ajax_form, url) {
	if(!validateEmail(document.getElementsByName('mail')[0].value)) {
		document.getElementById("figureres").innerHTML = "<div class=\"alert alert-danger animated fadeInDown delay-07s\"><strong>Error!</strong> Enter your E-mail.</div>";
		return;
	}
	if(document.getElementsByName('name')[0].value='') {
		document.getElementById("figureres").innerHTML = "<div class=\"alert alert-danger animated fadeInDown delay-07s\"><strong>Error!</strong> Enter your name.</div>";
		return;
	}
	if(document.getElementsByName('comm')[0].value='') {
		document.getElementById("figureres").innerHTML = "<div class=\"alert alert-danger animated fadeInDown delay-07s\"><strong>Error!</strong> Enter your message.</div>";
		return;
	}
    jQuery.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: jQuery("#"+ajax_form).serialize(),  
        success: function(response) { 
		document.getElementById("figureres").innerHTML = "<div class=\"alert alert-success animated fadeInDown delay-07s\"><center><strong>Success!</strong></center></div>";
		document.getElementsByName('name')[0].disabled = true;
		document.getElementsByName('mail')[0].disabled = true;
		document.getElementsByName('comm')[0].disabled = true;
		document.getElementById('butt_responce').disabled = true;
		var date = new Date;
		date.setDate(date.getDate() + 1);
		document.cookie = "stime=true; path=/; expires=" + date.toUTCString();
    	},
    	error: function(response) { 
		document.getElementById("figureres").innerHTML = "<div class=\"alert alert-danger animated fadeInDown delay-07s\"><strong>Error!</strong> Try later.</div>";
    	}
 	});
}