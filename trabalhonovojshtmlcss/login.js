const login = document.getElementById("botao")

login.addEventListener('click', () => {
    const usuar = document.getElementById('usu').value
    const senha1 = document.getElementById('senha').value
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let key = localStorage.key(i)
        let valor = localStorage.getItem(key)
        if (usuar == key && senha1 == valor) {
            var confirm = 1
        }

    } if (confirm == 1) {
        alert("Sucesso")
        window.open("teste.html")

    } else {
        alert("Errado")
    }
})