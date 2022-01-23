document.getElementById("btn").addEventListener("click", signUp);

  var userArr = JSON.parse(localStorage.getItem("userData")) || [];

 async function signUp() {
   let url = `https://masai-api-mocker.herokuapp.com/auth/register`

    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var user = document.getElementById("user").value;
    var mobile = document.getElementById("mobile").value;

    let userCredentials = {
      email: email,
      password: pass, 
      name: user,
      mobile: mobile,
      description: "A Transformation in education!",
      username:user,
    };



    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
          "Content-Type": "application/json"
      },
      // mode: "no-cors"
  });
  
  let data = await res.json();
  console.log('data:', data)

  if(data.error == true) {
    let message = document.getElementById("message");

    message.innerText = data.message;
    
  } else {

    userArr.push(userCredentials);
    localStorage.setItem("userData", JSON.stringify(userArr));

    let message = document.getElementById("message");
    
    message.style.color = "green";
    message.innerText = data.message;

    setTimeout(function(){
      window.location.href = "../signin.html"
    }, 1000);
  }
  
  }