import userLogin from" ./moduloDados.js";
const alertaLogin=new bootstrap.Modal(Modal(`#alertaLogin`);
const entrarUsuario = document.getElementById("btnEntrar");


entrarUsuario.addEventListener("click", _event=>{
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let validaLogin = userLogin.find((userLogin)=>userLogin.userName===login);
  if (login === "yaslaneramos" && senha === "123456") {
    