function verificarRespostas() {
    let pontuacao = 0;
    
    // Verifica a pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "certo") {
        pontuacao++;
    }

    // Verifica a pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "certo") {
        pontuacao++;
    }

    // Mostra o resultado na tela
    const resultadoDiv = document.getElementById("resultado");
    if (!q1 || !q2) {
        resultadoDiv.style.color = "orange";
        resultadoDiv.innerHTML = "Por favor, responda todas as perguntas!";
    } else {
        resultadoDiv.style.color = pontuacao === 2 ? "green" : "red";
        resultadoDiv.innerHTML = `Você acertou ${pontuacao} de 2 perguntas!`;
    }
}
