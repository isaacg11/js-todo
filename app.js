
var todoInput = document.getElementById('todo');
var todoOutput = document.getElementById('output');

function add() {
  todoOutput.innerHTML += '<tr>' + '<input type="checkbox"/>' + todoInput.value + '</tr>';
}
