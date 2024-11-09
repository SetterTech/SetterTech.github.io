document.getElementById("enviar").addEventListener("click", function (e) {
    e.preventDefault(); // Impede o envio automático do formulário

    let valid = true;

    // Função para verificar se o campo tem pelo menos 4 caracteres
    function verificarCampo(campo, label, campoNome) {
        if (campo.value.trim().length < 4) {
            label.innerHTML = campoNome + " (campo obrigatório)";
            label.style.color = "red";
            valid = false;
        } else {
            label.innerHTML = campoNome;
            label.style.color = ""; // Restaura a cor original
        }
    }

    // Seleciona os elementos e labels necessários
    const nome = document.getElementById("nome");
    const nomeEmpresa = document.getElementById("nome_empresa");
    const email = document.getElementById("email");
    const contato = document.getElementById("contato");
    const ajudar = document.getElementById("ajudar");

    // Verifica os campos
    const labelNome = document.querySelector("label[for='nome']");
    verificarCampo(nome, labelNome, "Nome*");

    const labelNomeEmpresa = document.querySelector("label[for='nome_empresa']");
    verificarCampo(nomeEmpresa, labelNomeEmpresa, "Nome da empresa*");

    const labelEmail = document.querySelector("label[for='email']");
    verificarCampo(email, labelEmail, "Email*");

    const labelContato = document.querySelector("label[for='contato']");
    verificarCampo(contato, labelContato, "Contato*");

    const labelAjudar = document.querySelector("label[for='ajudar']");
    if (ajudar.value.trim() === "") {
        labelAjudar.innerHTML = "Como podemos te ajudar?* (campo obrigatório)";
        labelAjudar.style.color = "red";
        valid = false;
    } else {
        labelAjudar.innerHTML = "Como podemos te ajudar?*";
        labelAjudar.style.color = ""; // Restaura a cor original
    }

    // Se todos os campos estiverem válidos
    if (valid) {
        document.getElementById("formulario").submit(); // Envia o formulário
        document.getElementById("formulario").style.display = "none"; // Esconde o formulário
        document.getElementById("mensagem_envio").style.display = "block"; // Exibe a mensagem de sucesso
    }
});
