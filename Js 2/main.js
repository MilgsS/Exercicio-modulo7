const formu = document.getElementById('form');
var maior = document.getElementById('maior');
var menor = document.getElementById('menor');
const MDS = 'O numero a esquerda é mair que o da direita'
const MDE = 'O da esquerda esta maior ou igual ao da direita. Tente Novamente';

form.addEventListener('submit', function(e){
    e.preventDefault();
})
correto = (maior.value) - (menor.value)
if (correto<= 0 ) MDS.style.display = block;
else falha.style.display = block