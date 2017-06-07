
//> Initial variables
var primaryList = document.getElementById('primary_list');
var input = document.querySelector('input[type="text"]');
var addInput = document.getElementById('add_button');
var toDoList = document.getElementById('to_do_list');
var firstListItem = document.querySelector('li');
var listItem = document.querySelectorAll('li');
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
    var previousItem = newListItem.previousElementSibling;
    var previousBtns = previousItem.firstElementChild;
    var completeMark = previousBtns.lastElementChild;
    var downBtn = document.createElement('button');
    downBtn.classList.add('down');
    downBtn.textContent = '<';
    previousBtns.appendChild(downBtn);
    previousBtns.insertBefore(downBtn, completeMark);
    
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
    var currentElement = target.parentNode.parentNode;
    var previousElement = currentElement.previousElementSibling;
    if (currentElement == toDoList.firstElementChild ) { // If the list item that was clicked is the first one
      var nextListItem = currentElement.nextElementSibling; // Get the next list itemm
      var btns = nextListItem.firstElementChild; // get its .btns
      var btnChildren = btns.children;
      for ( var i = 0; i < btnChildren.length; i++ ){
        if ( btnChildren[i].className == 'up' ) { // Loop through the buttons and find class name of up
          btnChildren[i].remove();
        }
      }
    } else if ( currentElement == toDoList.lastElementChild ) { // If the list item that was clicked on is the last of toDoList
      var btns = previousElement.firstElementChild;
      var btnChildren = btns.children;
      for ( var i = 0; i < btnChildren.length; i++ ){
        if ( btnChildren[i].className == 'down' ) { // Loop through the buttons and find class name of down
          btnChildren[i].remove();
        }
      }
    }
    currentElement.remove(); // Remove the list item that was clicked on
    //> Show a message saying the item was deleted 
    addMsg('deleted');
  } else if ( target.className == 'complete' ) {
    var currentElement = target.parentNode.parentNode;
    var nextElement = currentElement.nextElementSibling;
    
    if ( currentElement == toDoList.firstElementChild ) { // if the currentElement is the first list element in toDoList
      var btns = nextElement.firstElementChild; // get the next list elements buttons
      var btnChildren = btns.children;
      for ( var i = 0; i < btnChildren.length; i++ ){
        if ( btnChildren[i].className == 'up' ) { // Loop through the buttons and find class name of up
          btnChildren[i].remove();
        }
      }
    } else if ( currentElement == toDoList.lastElementChild ) {
      var prevElement = currentElement.previousElementSibling;
      var btns = prevElement.firstElementChild; // get the previous list element buttons
      var btnChildren = btns.children;
      for ( var i = 0; i < btnChildren.length; i++ ){
        if ( btnChildren[i].className == 'down' ) { // Loop through the buttons and find class name of up
          btnChildren[i].remove();
        }
      }
    }
    currentElement.remove();
    //> Message showing the item was successfully completed
    addMsg('success');
  } else if ( target.className == 'up' ) {
    var currentElement = target.parentNode.parentNode; //> get the list item of the clicked button
    var parent = currentElement.previousElementSibling; //> get the list item before of the clicked one
    var beforeLastElement = toDoList.lastElementChild;
    var lastUpArrow = toDoList.lastElementChild.previousElementSibling.firstElementChild.children[2];
    this.insertBefore(currentElement, parent);   
    //> If the clicked list element is the first one is the list
    if ( currentElement == toDoList.firstElementChild ) {
      var btns = document.querySelector('.btns');
      var btnChildren = btns.children;
      for ( var i = 0; i < btnChildren.length; i++ ) {
        if ( btnChildren[i].className == 'up' ) {
          btnChildren[i].remove();
        } 
      }
      var prevNowNext = currentElement.nextElementSibling.firstElementChild; // get the previous item before the new one and get it's .btns
      var downArrow = prevNowNext.firstElementChild.nextElementSibling; // get the down button in the prev item
      var upBtn = document.createElement('button');
      upBtn.classList.add('up');
      upBtn.textContent = '>';
      prevNowNext.appendChild(upBtn); // Append new up button to .btns list
      prevNowNext.insertBefore(upBtn, downArrow); // and insert the the new up button before the down button;
    }

    if ( beforeLastElement != toDoList.lastElementChild ) {
      var btns = beforeLastElement.firstElementChild;
      var completeMark = btns.lastElementChild; //> Get check mark
      var downBtn = document.createElement('button');
      downBtn.classList.add('down');
      downBtn.textContent = '<';
      btns.appendChild(downBtn); // Append new down button to .btns list
      btns.insertBefore(downBtn, completeMark); // Insert the the new down button before the complete check mark
      lastUpArrow.remove();
    }

  } else if ( target.className == 'down' ) {
    var currentElement = target.parentNode.parentNode; //> get the list item of the clicked button
    var afterElement = currentElement.nextElementSibling; //> get the list item above of the clicked one
    this.insertBefore(afterElement, currentElement); //> 
    if ( currentElement == toDoList.lastElementChild ) { // if the currentElement is equal to the last item in the list
      var prevBtns = currentElement.previousElementSibling.firstElementChild; // get the previous item before the new one and get it's .btns
      var prevBtnsChildren = prevBtns.lastElementChild; // get the complete check mark 
      var downBtn = document.createElement('button');
      downBtn.classList.add('down');
      downBtn.textContent = '<';
      prevBtns.appendChild(downBtn); // Append new down button to .btns list
      prevBtns.insertBefore(downBtn, prevBtnsChildren); // Insert the the new down button before the complete check mark
      
      var btnContainer = currentElement.querySelector('.btns'); // Get the currentElements .btns
      var btns = btnContainer.children; // get the children inside of .btns
      
      for ( var i = 0; i < btns.length; i++ ) {
        if ( btns[i].className == 'down' ) {
          var deleteButton = btns[i];
          deleteButton.remove(); // remove deleteButton
        }
      }
      
    } else if ( afterElement == toDoList.firstElementChild  ) {
      var firstUpArrow = toDoList.firstElementChild.firstElementChild.children[1];
      var btns = currentElement.firstElementChild; // get .btns of what was the first element
      var downArrow= btns.firstElementChild.nextElementSibling; //> Get delete button
      var upBtn = document.createElement('button');
      upBtn.classList.add('up');
      upBtn.textContent = '>';
      btns.appendChild(upBtn); // Append new up button to .btns list
      btns.insertBefore(upBtn, downArrow); // and insert the the new up button before the down button;
      firstUpArrow.remove();
      
    } 
    
  }
});