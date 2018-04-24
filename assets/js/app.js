$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open');
    $(this).toggleClass('open');
})

// This is for the to task webpage
 function todoList(){
     var item = document.getElementById("todoInput").value;
     var text = document.createTextNode(item);
     var newItem = document.createElement("li");
     newItem.appendChild(text);
     document.getElementById("todoList").appendChild(newItem);
 }