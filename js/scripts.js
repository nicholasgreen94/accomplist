
//> Initial variables
var primaryList = document.getElementById('primary_list');
var input = document.querySelector('input[type="text"]');
var addInput = document.getElementById('add_button');
var toDoList = document.getElementById('to_do_list');
var firstListItem = document.querySelector('li');
var deleteButton = document.querySelectorAll('.delete');
var up = document.querySelectorAll('#to_do_list .up');
var down = document.querySelectorAll('#to_do_list .down');
var complete = document.querySelectorAll('#to_do_list .complete');

function addMsg(msgType) {
  var msgValue = msgType;
  var msgType = document.createElement('p');
  msgType.className = msgValue + ' message';
  //> See which value was entered and return corresponding value
  switch (msgValue) {
    case 'error': 
      msgType.textContent = 'Item cannot be blank. Please add an item.';
      break;
    case 'added':
      msgType.textContent = 'The item was successfully added to your list.';
      break;
    case 'deleted': 
      msgType.textContent = 'Your item was successfully removed.';
      break;
    case 'success':
      msgType.textContent = 'Your item was successfully completed.';
      break;
  }
  primaryList.appendChild(msgType);
  removeMsg(msgType);
}

//> Create a setTimeout to remove added messages
function removeMsg(message) {
  setTimeout(function() {
    message.remove();
  }, 5000);
}

function addNewListItem(e) {
  var newListItem = document.createElement('li');
  var newDiv = document.createElement('div');
  var deleteBtn = document.createElement('button');
  var userInput = input.value;
  //> Add a new item to the list if the value of the input is not empty
  if ( input.value  != '' ) {
    newListItem.textContent = input.value;
    newDiv.classList.add('btns');
    //> Add a delete button
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'X';
    newDiv.appendChild(deleteBtn);
    //> Add an up button
    var upBtn = document.createElement('button');
    upBtn.classList.add('up');
    upBtn.textContent = '>';
    newDiv.appendChild(upBtn);
    //> Add a down button
    var downBtn = document.createElement('button');
    downBtn.classList.add('down');
    downBtn.textContent = '<';
    newDiv.appendChild(downBtn);
    //> Add a complete button
    var completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '&#10003;'; //> innerHTML due to HTML entity
    newDiv.appendChild(completeBtn);
    newListItem.appendChild(newDiv);
    toDoList.appendChild(newListItem);
    input.value = ''; //> Reset value of the input box to empty
    //> Add a message saying adding the new item was successful
    addMsg('added');
  } else {
    //> If userInput does not have a value, add error message
      addMsg('error');
    }
  e.stopPropagation();
}

addInput.addEventListener('click', function(e) {
  addNewListItem(e);
});

toDoList.addEventListener('click', function(e) {
  var target = e.target;
  if ( target.className == 'delete' ) {
    target.parentNode.parentNode.remove();
    //> Show a message saying the item was deleted 
    addMsg('deleted');
  } else if ( target.className == 'complete' ) {
    target.parentNode.parentNode.remove();
    //> Message showing the item was successfully completed
    addMsg('success');
  } else if ( target.className == 'up' ) {
    var currentElement = target.parentNode.parentNode; //> get the list item of the clicked button
    var parent = currentElement.previousElementSibling; //> get the list item before of the clicked one
    this.insertBefore(currentElement, parent); //>
  } else if ( target.className == 'down' ) {
    var currentElement = target.parentNode.parentNode; //> get the list item of the clicked button
    var afterElement = currentElement.nextElementSibling; //> get the list item above of the clicked one
    this.insertBefore(afterElement, currentElement); //> Insert currentElement before afterElement
  }

});