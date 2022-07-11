"use strict"
// console.log("js funcionando");

const tiForm = document.querySelector(".conTitulo");
const fomrContainer = document.querySelector(".formContainer");
tiForm.textContent = "Hello World!!!";

const contrato = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem amet sit repudiandae eveniet impedit numquam odit deserunt excepturi obcaecati, \nvoluptatum minus facere perspiciatis. Odio, nostrum voluptatibus. \nDebitis, fugiat laboriosam.Lorem ipsum dolor sit \namet consectetur adipisicing elit. Voluptas voluptatem amet sit repudiandae eveniet impedit numquam odit deserunt excepturi obcaecati, \nvoluptatum minus facere perspiciatis. \nI - Odio, nostrum voluptatibus. \nII - Debitis, fugiat laboriosam.\nIII - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem amet sit \nrepudiandae eveniet impedit numquam odit deserunt excepturi obcaecati, voluptatum minus facere perspiciatis. Odio, nostrum voluptatibus."

const Input = {
    Nome: document.querySelector("#inputNome"),
    Email: document.querySelector("#inputEmail"),
    Text: document.querySelector("#termos"),
    Check: document.querySelector("#readOk"),
    Button: document.querySelectorAll(".boto")
}
Input.Text.textContent = contrato;
Input.Text.readOnly = true;

Input.Button[0].disabled = true;
Input.Button[1].disabled = true;

const checkTeste = ()=>{
    Input.Button[1].disabled = !Input.Check.checked;
    // Input.Check.disabled = true;
}

const sendMes = () => {
    if(Input.Nome.value&&Input.Email.value){
        fomrContainer.innerHTML =`<h2 class="sub">Olá, ${Input.Nome.value}!</h2>`;
        console.log(`<h2 class="sub">Olá, ${Input.Nome.value}!</h2>`);
    }
    else{
        (!Input.Nome.value)?Input.Nome.focus():Input.Email.focus();
        (!Input.Nome.value)?Input.Nome.style.backgroundColor = "#faa":
        Input.Email.style.backgroundColor = "#faa";
        alert("Preencha nome e email: ");
    }
}