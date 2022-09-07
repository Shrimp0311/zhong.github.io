function validate()
{
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

    if(username=="giaogiao"&& password=="giaogiao")
    {
        alert("歡迎");
        window.open("main/home.html");
        return false;
    }
    else{
        alert("登不進來吧 北七");
    }

}