
let getInput = document.querySelector('body #add_input');
let addInput = document.querySelector('#add span');
var primaryList = document.getElementById('primary_list');
let list = document.querySelector('#list');
let listItems = document.querySelectorAll('.list_item');

addInput.addEventListener('click', createNewItem);

// Create and add a new item; if input value is empty, display error message
function createNewItem(e) {
  if ( getInput.value == '' ) {
    var error = document.createElement('p');
    error.innerHTML = 'Unable to submit an empty input, please add an item.';
    error.classList.add('error');
    primaryList.appendChild(error); // Error Message
    function removeMessage() {
      error.remove();
    }
  } else {
    // Create a new element with all the needed components 
      let item = document.createElement('li');
      let itemPar = document.createElement('p');
      let span = document.createElement('span');
      let deleteB = document.createElement('b');
      let upB = document.createElement('b');
      let downB = document.createElement('b');
      let completeB = document.createElement('b');
      span.classList.add('u-pull-right');
      deleteB.innerHTML = '&#10005';
      deleteB.classList.add('delete');
      upB.innerHTML = '&#9720;';
      upB.classList.add('move_up');
      downB.innerHTML = '&#9727;';
      downB.classList.add('move_down');
      completeB.innerHTML = '&#10003;';
      completeB.classList.add('complete');
      let itemContent = document.createTextNode(getInput.value); // add the value of the input to new item
      itemPar.appendChild(itemContent); // add text input to the list item
      item.appendChild(itemPar); // Add paragraph to the list item
      span.appendChild(deleteB);
      span.appendChild(upB);
      span.appendChild(downB);
      span.appendChild(completeB);
      item.appendChild(span);
      item.classList.add('list_item');
      item.addEventListener('click', addOrRemove);
      
      getInput.value = ''; // reset value of the input
      list.appendChild(item);
      e.stopPropagation(); 
      var complete = document.createElement('p');
      complete.innerHTML = 'Item Successfully Added';
      complete.classList.add('task_complete');
      primaryList.appendChild(complete); // Error Message
      function removeMessage() {
        complete.remove();
      }
    }
    setTimeout(removeMessage, 5000);
  }

function addOrRemove(e) {
  if ( e.target.className == 'delete') {
    console.log(this);
    this.remove();
  } else if (e.target.className == 'complete') {
    console.log(this);
    this.remove();
  } else if ( e.target.className == 'move_up' ) {
    var parent = this.parentNode;
    var previousItem = this.previousElementSibling;
    if ( previousItem ) {
      parent.insertBefore(this, previousItem);
    } 
  } else if ( e.target.className == 'move_down' ) {
    var parent = this.parentNode;
    var nextItem = this.nextElementSibling;
    if ( nextItem ) {
      this.classList.remove('move_down');
      parent.insertBefore(nextItem, this);
    } 
  }
  e.stopPropagation();
}

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', addOrRemove);
}
