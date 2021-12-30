
const form = document.querySelector("form");
const handleSubmit = e =>{
    e.preventDefault();
    const codigo = document.getElementById("code").value;
    if(codigo != 208308) return alert("El codigo es incorrecto, usted es quien dice ser? 🤔");

    window.location = "/congrat.html";
}

form.addEventListener("submit", handleSubmit);