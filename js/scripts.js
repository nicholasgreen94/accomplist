
var primaryList = document.getElementById('primary_list');
var input = document.querySelector('input[type="text"]');
var addInput = document.getElementById('add_button');
var toDoList = document.getElementById('to_do_list');
var firstListItem = document.querySelector('li');
var deleteButton = document.querySelectorAll('.delete');
var up = document.querySelectorAll('#to_do_list .up');
var down = document.querySelectorAll('#to_do_list .down');
var complete = document.querySelectorAll('#to_do_list .complete');

function addNewListItem(e) {
  var newListItem = document.createElement('li');
  var newDiv = document.createElement('div');
  var deleteBtn = document.createElement('button');
  var userInput = input.value;
  newListItem.textContent = input.value;
  newDiv.classList.add('btns');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'X';
  newDiv.appendChild(deleteBtn);
  var upBtn = document.createElement('button');
  upBtn.classList.add('up');
  upBtn.textContent = '>';
  newDiv.appendChild(upBtn);
  var downBtn = document.createElement('button');
  downBtn.classList.add('down');
  downBtn.textContent = '<';
  newDiv.appendChild(downBtn);
  var completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '&#10003;'; // innerHTML due to HTML entity
  newDiv.appendChild(completeBtn);
  newListItem.appendChild(newDiv);
  toDoList.appendChild(newListItem);
  input.value = '';
  // Add a message saying adding the new item was successful
  var addedItem = document.createElement('p');
  addedItem.className = 'added message';
  addedItem.textContent = 'Your item was successfully added to your list';
  primaryList.appendChild(addedItem);
  e.stopPropagation();
}

addInput.addEventListener('click', function(e) {
  addNewListItem(e);
});

toDoList.addEventListener('click', function(e) {
  var target = e.target;
  if ( target.className == 'delete' ) {
    target.parentNode.parentNode.remove();
    var deleteMsg = document.createElement('p');
    deleteMsg.className = 'deleted message';
    deleteMsg.textContent = 'Your item was successfully removed.';
    primaryList.appendChild(deleteMsg);
  } else if ( target.className == 'complete' ) {
    target.parentNode.parentNode.remove();
    var successMsg = document.createElement('p');
    successMsg.className = 'success message';
    successMsg.textContent = 'Your item was successfully completed.';
    primaryList.appendChild(successMsg);
  } else if ( target.className == 'up' ) {
    var currentElement = target.parentNode.parentNode; // get the list item of the clicked item
    var parent = currentElement.previousElementSibling; // get the list item above of the clicked one
    this.insertBefore(currentElement, parent);
  } else if ( target.className == 'down' ) {
    var currentElement = target.parentNode.parentNode; // get the list item of the clicked item
    var afterElement = currentElement.nextElementSibling; // get the list item above of the clicked one
    this.insertBefore(afterElement, currentElement);
  }

});