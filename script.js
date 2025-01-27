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



// Previne o fechamento da aba/navegador e minimização
window.onbeforeunload = function (event) {
    event.returnValue = "Você tem certeza que deseja sair? A música vai parar.";
    return "Você tem certeza que deseja sair? A música vai parar.";
};

// Tenta manter o áudio tocando se a aba for minimizada
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        // Se a aba foi minimizada ou não está visível, tente continuar a música
        audioPlayer.play().catch(error => {
            console.log("Erro ao tentar continuar o áudio:", error);
        });
    } else {
        // Quando a aba volta a ser visível, tenta garantir que o áudio continue
        audioPlayer.play().catch(error => {
            console.log("Erro ao tentar continuar o áudio:", error);
        });
    }
});

// Previne a navegação para outra página ou fechamento da aba
(function() {
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
