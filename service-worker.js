self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    self.skipWaiting(); // Force a instalação imediata
});

self.addEventListener('activate', event => {
    console.log('Service Worker ativado');
    event.waitUntil(clients.claim()); // Garanta que o SW controle imediatamente a página
});

self.addEventListener('fetch', event => {
    console.log('Requisição interceptada:', event.request);
    // Se você quiser controlar as requisições de rede ou cache, pode adicionar aqui
});
