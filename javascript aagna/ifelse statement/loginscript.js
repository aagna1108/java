function login(){

    let u_name = document.getElementById("username").value;
    let u_pwd = document.getElementById("password").value;

    if(u_name == "admin" && u_pwd == "Admin@143"){

        window.open("welcome.html")

    }else{
        alert(" wrong password try again ... ")
    }


}