

let name = document.getElementById("name").Value
let login = document.getElementById("login").Value
let data = document.getElementById("data").Value
let gender = document.getElementById("select").Value
let cpf = document.getElementById("cpf").Value
let address = document.getElementById("address").Value
let cel = document.getElementById("cel").Value
let tel = document.getElementById("tel").Value
let password = document.getElementById("password").Value
let confirmpassword = document.getElementById("confirmpassword").Value

if (password.length < 6) {
     alert('A senha deve ter no mínimo 6 caracteres.') 
     document.getElementById('form').addEventListener('submit',function(event){
          event.preventDefault()})
}