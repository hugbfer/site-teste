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
