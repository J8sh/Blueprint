// first collect data from the input form

function textInput () {
var task = document.getElementById('inputTodo').value;
};

// secondly, adding the data to an array

var todoList = [];
todoList.push(textInput());
document.getElementById("taskList").innerHTML = todoList;
