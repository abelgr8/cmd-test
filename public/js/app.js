$(document).ready(function () {
    function createUser(e) {
        e.preventDefault(); 
        var userInfo={
            firstName: $("#first-name").val().trim(),   
            middleName: $("#middle-name").val().trim(), 
            lastName: $("#last-name").val().trim(),
            streetAddress: $("#street").val().trim(),   
            city: $("#city").val().trim(), 
            state: $("#state").val().trim(),
            zip: $("#zip").val().trim(),   
            dob: $("#dob").val().trim(), 
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),   
            confirm: $("#middle-name").val().trim(), 
        }
            // console.log(userInfo); 
        $.ajax({
            method: "PUT",
            url: "http://localhost:3000/api/user",
            data: userInfo 
        }).done(function(data){
            console.log(data)
        });
    }

    function loginInfo (e) {
        e.preventDefault(); 
        var userInfo={
            loginEmail: $("#loginEmail").val().trim(),   
            loginPassword: $("#loginPassword").val().trim(),  
        }
            console.log(userInfo); 
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/api/login",
            data: userInfo 
        }).done(function(data){
            console.log(data)
        });
    }

    

    $(".createUser").submit(createUser); 
    $("#loginForm").submit(loginInfo); 
})
