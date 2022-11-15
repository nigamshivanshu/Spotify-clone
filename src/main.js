import './style.css';
const APP_URL=import.meta.env.VITE_APP_URL;//for importing APP_URL from env file

document.addEventListener("DOMContentLoaded",()=>{
  //If user had already login into account then redirect to Dashboard else to login page
  if (localStorage.getItem("accessToken")){
    window.location.href=`${APP_URL}/dashboard/dashboard.html`;
  }else{
    window.location.href=`${APP_URL}/login/login.html`;
  }
})