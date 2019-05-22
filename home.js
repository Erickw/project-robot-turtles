"use strict";

function home() {

    var users = ["A", "B", "C"];
    var registoConfirmaPassword = [];

    if (typeof(Storage) !== "undefined") {
        $('#btnRegistar').on("click", function() {
            localStorage.setItem("user", document.registo.user.value);
            localStorage.setItem("email", document.registo.email.value);
            localStorage.setItem("data", document.registo.data.value);
            localStorage.setItem("password", document.registo.password.value);
            localStorage.setItem("confirmarPassword", document.registo.confirmarPassword.value);  

            var usuario = document.getElementById("user").value;
            //var senha = document.getElementById('confirmarSenha').value;

            if(localStorage.getItem("password") === localStorage.getItem("confirmarPassword")) {
                users.push(usuario);
                //registoConfirmaPassword.push(senha);
            } else {
                alert("Senhas distintas.");
            }

        })

        $('#btnLogin').on("click", function() {
            localStorage.setItem("username", document.login.username.value);
            localStorage.setItem("loginPassword", document.login.passwordLogin.value);

            let username = localStorage.getItem("username", document.login.username.value);
            let loginPassword = localStorage.getItem("loginPassword", document.login.passwordLogin.value);

            for(let i = 0; i < users.lenght; i++) {
                if(username === users[i]) {
                    if(loginPassword == registoConfirmaPassword[i]){
                        break;
                    }
                } else {
                    alert("Usuário não existe.")
                }
            }
        })

        console.log(users);

    } else {
        console.log("Sorry! No Web Storage support.");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {home()});