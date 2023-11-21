document.addEventListener('DOMContentLoaded', function () {
  // Substitua com os IDs dos vídeos do YouTube e os textos das dicas correspondentes
  const videos = [
    { id: 'videoId1', tips: ['Dica 1 para o vídeo 1', 'Dica 2 para o vídeo 1'] },
    // Adicione mais vídeos e dicas aqui
  ];

  // Função para atualizar o vídeo e as dicas
  function updateVideoAndTips(index) {
    const videoFrame = document.getElementById('video');
    videoFrame.src = 'https://www.youtube.com/embed/' + videos[index].id;
    
    const tipsCarousel = document.querySelector('.tips-carousel');
    tipsCarousel.innerHTML = ''; // Limpa o carrossel
    videos[index].tips.forEach(function (tip) {
      const tipDiv = document.createElement('div');
      tipDiv.textContent = tip;
      tipsCarousel.appendChild(tipDiv);
    });
  }

  // Inicializa com o primeiro vídeo e dicas
  updateVideoAndTips(0);

  // Aqui você pode adicionar lógica para mudar o vídeo e as dicas com base em interações do usuário ou temporizador
});
