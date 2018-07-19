var xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        alert("ok");
    }
}
xml.open("POST","/myaccount/settings/closeAccount");
xml.setRequestHeader("Content-Type", "application/json");
xml.send(JSON.stringify({"isDefault":false}));
