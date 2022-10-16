import './style.css';

document.addEventListener("DOMContentLoaded",()=>{
  //If user had already login into account then redirect to Dashboard else to login page
  if (localStorage.getItem("accessToken")){
    window.location.href="dashoard/dashboard.html";
  }else{
    window.location.href="login/login.html";
  }
})