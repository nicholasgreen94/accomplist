
let getInput = document.getElementById('add_input');
let addInput = document.querySelector('#add span');
let list = document.querySelector('#list');
let deleteItem = document.querySelector('.delete');
let moveItemUp = document.querySelector('.move_up');
let moveItemDown = document.querySelector('.move_down');
let completeItem = document.querySelector('.complete');



// add an item to the list
addInput.addEventListener('click', function() {
  let item = document.createElement('li');
  let itemContent = document.createTextNode(getInput.value);
  item.appendChild(itemContent);
  item.classList.add('list_item');
  
  for (var i = 0; i <= 3; i++) {
    let addTags = document.createElement('b');
  }
  
  
  list.appendChild(item);
});
