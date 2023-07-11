const LoginArea = document.getElementById('login-area');
const LoginBtn = document.getElementById('login-btn');

LoginBtn.addEventListener('click',()=>{
    console.log(1);
    LoginArea.style = 'display: none !important;';
});