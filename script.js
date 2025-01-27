// Captura o botão e o áudio
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Adiciona um evento de clique no botão
playButton.addEventListener('click', () => {
    // Reproduz a música e começa o loop
    audioPlayer.play();
});
