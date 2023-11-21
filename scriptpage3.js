document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-btn').addEventListener('click', function () {
    var searchTerm = document.getElementById('procedure-search').value;
    searchProcedures(searchTerm);
  });
});

// Simulação de uma função de busca
function searchProcedures(searchTerm) {
  // Aqui você pode integrar com uma API de busca ou uma base de dados
  // Para o exemplo, vamos apenas exibir um texto baseado na entrada
  var procedureDescription = document.getElementById('procedure-description');
  if (searchTerm.toLowerCase() === 'exemplo') {
    procedureDescription.innerHTML = '<p>Informações sobre o procedimento "exemplo".</p>';
  } else {
    procedureDescription.innerHTML = '<p>Resultado da busca para: ' + searchTerm + '</p>';
  }
}
