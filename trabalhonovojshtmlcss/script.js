const salvar = document.getElementById("cadastro")

salvar.addEventListener('click', () => {
    let usuario = document.getElementById("usuario").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;
    if (senha1 == senha2 && senha1 != "") {
        localStorage.setItem(usuario, senha1)
        alert("Cadastrado com sucesso!")
        window.open("index (1).html")
    } else {
        alert("Digite as senhas iguais")
    }
})