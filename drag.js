// Adicionar tarefa
const form = document.querySelector('form');
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const cardFazer = document.getElementById('cardFazer');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const tarefa = inputTarefa.value;
  if (tarefa.trim() !== '') {
    const divTarefa = document.createElement('p');
    divTarefa.className = 'tarefa';
    divTarefa.textContent = tarefa;
    divTarefa.draggable = true;
    divTarefa.addEventListener('dragstart', dragStart);
    cardFazer.appendChild(divTarefa);
    inputTarefa.value = '';

    // Atualizar os eventos de arrastar e soltar
    divTarefa.addEventListener('dragstart', dragStart);
    divTarefa.addEventListener('dragend', dragEnd);
  }
});

// Movimentar tarefas
const cards = document.querySelectorAll('.card');

function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragEnter() {
  this.classList.add('dragover');
}

function dragLeave() {
  this.classList.remove('dragover');
}

function dragOver(event) {
  event.preventDefault();
}

function drop() {
  const tarefa = document.querySelector('.dragging');
  this.appendChild(tarefa);
  this.classList.remove('dragover');

  if (this.id === 'cardFeito') {
    tarefa.classList.add('tarefa-concluida');
  } else {
    tarefa.classList.remove('tarefa-concluida');
  }
}

cards.forEach(function(card) {
  card.addEventListener('dragenter', dragEnter);
  card.addEventListener('dragleave', dragLeave);
  card.addEventListener('dragover', dragOver);
  card.addEventListener('drop', drop);
});


