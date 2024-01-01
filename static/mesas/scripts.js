document.addEventListener('DOMContentLoaded', () => {
    const mesas = document.querySelectorAll('.mesa');
  
    mesas.forEach(mesa => {
      mesa.addEventListener('dragstart', dragStart);
      mesa.addEventListener('dragend', dragEnd);
    });
  
    const tablero = document.getElementById('tablero');
  
    tablero.addEventListener('dragover', dragOver);
    tablero.addEventListener('dragenter', dragEnter);
    tablero.addEventListener('dragleave', dragLeave);
    tablero.addEventListener('drop', drop);
  });
  
  function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }
  
  function dragEnd() {

  }
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains('mesa')) {
      event.target.classList.add('mesa-hover');
    }
  }
  
  function dragLeave(event) {
    if (event.target.classList.contains('mesa')) {
      event.target.classList.remove('mesa-hover');
    }
  }
  
  function drop(event) {
    event.preventDefault();
    const mesaId = event.dataTransfer.getData('text/plain');
    const mesa = document.getElementById(mesaId);
    mesa.classList.remove('mesa-hover');
  
    const offsetX = event.clientX - event.target.getBoundingClientRect().left - mesa.offsetWidth / 2;
    const offsetY = event.clientY - event.target.getBoundingClientRect().top - mesa.offsetHeight / 2;
  
    mesa.style.left = offsetX + 'px';
    mesa.style.top = offsetY + 'px';
  }
  