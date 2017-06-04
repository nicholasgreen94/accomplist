<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>To-Do Application</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet">
    <link rel="stylesheet" href="stylesheets/styles.css">
  </head>
  <body>
    <header>
      <div id="main_header">
        <div class="container">
          <h2>Mock Logo</h2>
        </div>
      </div>
    </header>
    <div id="index" class="container">
      <div class="row">
        <h1>Your to-do list</h1>
        <div id="primary_list" class="columns eight">
          <div class="gradient_bar"></div>
          <div id="add_item">
            <input type="text" placeholder="Add New Item">
            <button id="add_button">Add Item</button>
          </div>
          <ul id="to_do_list">
            <li>Clean the Dishes <div class="btns"><button class="delete">X</button><button class="up">&#62;</button><button class="down">&lt;</button><button class="complete">&#10003;</button></div></li>
            <li>Wash the car <div class="btns"><button class="delete">X</button><button class="up">&#62;</button><button class="down">&lt;</button><button class="complete">&#10003;</button></div></li>
            <li>Laundry <div class="btns"><button class="delete">X</button><button class="up">&#62;</button><button class="down">&lt;</button><button class="complete">&#10003;</button></div></li>
          </ul>
        </div>
      </div>
    </div>
  </body>
  <script async defer type="text/javascript" src="js/scripts.js"></script>
</html>