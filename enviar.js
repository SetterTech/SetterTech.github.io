document.getElementById("enviar").addEventListener("click", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do botão

    // Seleciona os elementos necessários
    const nome = document.getElementById("nome");
    const nomeEmpresa = document.getElementById("nome_empresa");
    const email = document.getElementById("email");
    const contato = document.getElementById("contato");
    const ajudar = document.getElementById("ajudar");
    
    let valid = true;

    // Função para verificar se o campo tem pelo menos 4 dígitos
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

    // Verifica o campo 'nome'
    const labelNome = document.querySelector("label[for='nome']");
    verificarCampo(nome, labelNome, "Nome*");

    // Verifica o campo 'nome da empresa'
    const labelNomeEmpresa = document.querySelector("label[for='nome_empresa']");
    verificarCampo(nomeEmpresa, labelNomeEmpresa, "Nome da empresa");

    // Verifica o campo 'email'
    const labelEmail = document.querySelector("label[for='email']");
    verificarCampo(email, labelEmail, "Email*");

    // Verifica o campo 'contato'
    const labelContato = document.querySelector("label[for='contato']");
    verificarCampo(contato, labelContato, "Contato*");

    // Verifica se o campo "Como podemos te ajudar?" não está vazio
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
        // Substitui a div atual por um canvas com a mensagem
        const section = document.querySelector(".section_nove_bloco_input");
        section.innerHTML = '<canvas id="successCanvas" width="450" height="800"></canvas>';

        const canvas = document.getElementById("successCanvas");
        const ctx = canvas.getContext("2d");
        ctx.font = "bold 28px Roboto"; // Aplica o negrito
        ctx.fillStyle = "#055C9D";
        ctx.textAlign = "center";
        ctx.fillText("Mensagem enviada!", canvas.width / 2, canvas.height / 2.2);
        ctx.fillText("Entraremos em contato.", canvas.width / 2, canvas.height / 2);

    }
});
