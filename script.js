// Captura o botão e o áudio
const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");

const conteudo = document.getElementById("conteudo");

const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique no botão
playButton.addEventListener("click", () => {
  // Garantir que o áudio comece a tocar em loop quando o botão for clicado
  audioPlayer.play().catch((error) => {
    // Se houver erro (por exemplo, bloqueio de reprodução automática), loga o erro
    console.error("Erro ao tentar tocar o áudio:", error);
  });
  mensagem.classList.remove("d-none");
  mensagem.classList.add("d-block");

  conteudo.classList.remove("d-block");
  conteudo.classList.add("d-none");
});

window.history.pushState(null, null, window.location.href);
window.onpopstate = function() {
    window.history.pushState(null, null, window.location.href);
};


window.onbeforeunload = function (event) {
    // Mostra uma mensagem quando o usuário tentar fechar ou recarregar a página
    event.returnValue = "Você tem certeza que deseja sair?";
    return "Vai sair mesmo?;
};

// Função para tentar bloquear a navegação
(function() {
    // Bloqueio da navegação por clique em links, evitar que a página seja abandonada.
    const preventExit = () => {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function() {
            window.history.pushState(null, null, window.location.href);
        };
    };

    // Chama a função para bloquear navegação
    preventExit();

    // Configura um timer para bloquear mais agressivamente (em alguns casos)
    setInterval(() => {
        preventExit();
    }, 1000);  // A cada segundo verifica a navegação

})();
