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
    <div class="container">
      <div class="row">
        <div id="primary_list" class="five columns">
          <div class="gradient_bar"></div>
          <img id="profile_image" src="img/user.jpg" alt="a picture of yourself">
          <h1>Your List</h1>
          <ul id="list">
            <li class="list_item"><p>Clean the Dishes</p> <span class="u-pull-right"><b class="delete">&#10005;</b><b class="move_up">&#9720;</b><b class="move_down">&#9727;</b><b class="complete">&#10003;</b></span></li>
            <li class="list_item"><p>Laundry</p> <span class="u-pull-right"><b class="delete">&#10005;</b><b class="move_up">&#9720;</b><b class="move_down">&#9727;</b><b class="complete">&#10003;</b></span></li>
            <li class="list_item"><p>Exercise</p> <span class="u-pull-right"><b class="delete">&#10005;</b><b class="move_up">&#9720;</b><b class="move_down">&#9727;</b><b class="complete">&#10003;</b></span></li>
          </ul>
          <input type="text" name="user_input" id="add_input">
          <div id="add">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript" src="js/scripts.js"></script>
</html>