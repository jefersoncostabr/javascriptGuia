//Drag & drop/ arrasta e solta

//draggable= "true" -> dentro da tag do elemento a ser arrastado
//    pode ser feito com js
//        elemento.draggable = true


//Código completo

// Variável para armazenar o elemento arrastado
var elArrastado = null;

// Obter o elemento arrastável
var elArrastavel = document.getElementById('elArrastavel');

// Adicionar evento de início de arrasto
elArrastavel.addEventListener('dragstart', function(evento) {
  // Definir o elemento arrastado
  elArrastado = evento.target;

  // Definir a posição do elemento como absoluta para posicionamento relativo
  elArrastado.style.position = 'absolute';
});

// Adicionar evento de passagem sobre elemento
document.addEventListener('dragover', function(evento) {
  // Evitar o comportamento padrão (abrir link ao arrastar sobre um elemento)
  evento.preventDefault();
});

// Adicionar evento de soltar elemento
document.addEventListener('drop', function(evento) {
  // Evitar o comportamento padrão (abrir link ao soltar sobre um elemento)
  evento.preventDefault();

  // Verificar se há um elemento arrastado
  if (elArrastado) {
    // Obter as coordenadas do mouse
    var mouseX = evento.clientX;
    var mouseY = evento.clientY;

    // Calcular a posição centralizada para o elemento solto
    var novaEsquerda = mouseX - elArrastado.offsetWidth / 2;
    var novaTopo = mouseY - elArrastado.offsetHeight / 2;

    // Definir a nova posição do elemento solto (left e top)
    elArrastado.style.left = novaEsquerda + 'px';
    elArrastado.style.top = novaTopo + 'px';

    // Opcional: Redefinir a posição para o valor original após um tempo (5 segundos neste exemplo)
    setTimeout(function() {
      elArrastado.style.position = 'default'; // Redefinir posição (opcional)
    }, 5000); // Tempo de atraso para redefinição (ajuste conforme necessário)
  }
});
