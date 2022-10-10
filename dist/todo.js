function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // Note, need to use '' because of "" in HTML
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      newTask;
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
      
       /* Step 4 below here */
      input.value = "";
      //Change input.placeholder to set it to a new string such as “enter next task …”
        input.placeholder = "enter next task ...";
    }
  }
  
  
  
  // change styling used for given item
  function markDone (item) { 
    if (item.className == 'finished') {
      // if already checked, uncheck it
      item.className = '';
    } else {
      item.className = 'finished';
  }}
  
  /* Step 7 below here */
  function remove (item) {
    // remove item completely from document
    if(item.className == 'finished'){
         item.remove();
    }
  }
  
  /* Step 11 below here */
  //omplete the doAbout() function. This function should change the text in the div you created with id “divabout”. The text should say that you are the author. You might put something like this: “Author is Susan Rodger” but put your name. In addition the background color of the div should change to yellow.
  function doAbout() {
    document.getElementById("divabout").innerHTML = "Author is Zafer Arslan!";
    document.getElementById("divabout").style.backgroundColor = "yellow";
  }
  
  /* Step 14 below here */
  function clearAbout() {
    document.getElementById("divabout").innerHTML = "";
  }
