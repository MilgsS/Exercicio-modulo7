const formu = document.getElementById('form');
var maior = document.getElementById('maior');
var menor = document.getElementById('menor');
const MDS = document.getElementById('MDS')
const MDE = document.getElementById('falha')
const quase = document.getElementById('quase')

formu.addEventListener('submit', function(e) {
    e.preventDefault();
    let correto = (maior.value)-(menor.value);
    if (correto < 0) MDE.style.display = 'block', MDS.style.display='none', quase.style.display='none'
    else MDS.style.display = 'block', MDE.style.display='none', quase.style.display='none'
})
