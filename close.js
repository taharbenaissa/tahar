function getToken(){
	var xml = new XMLHttpRequest();
	xml.responseType = "document";
	xml.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.response;
			var token = response.body.getAttribute("data-token");
			alert(token);
		}
	}
	xml.open("GET","/myaccount/settings/account/close");
	xml.send();
}

var xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        alert("ok");
    }
}
xml.open("POST","/myaccount/settings/closeAccount");
xml.setRequestHeader("Content-Type", "application/json");
xml.setRequestHeader("X-CSRF-Token", getToken());

xml.send(JSON.stringify({"isDefault":false}));


