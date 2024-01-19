// Create a new list item when clicking on the "New" button
function createTask() {
  let taskDescr = prompt("Please enter your task");
  var li = document.createElement("li");
  var t = document.createTextNode(taskDescr);
  li.appendChild(t);
  if (taskDescr === '') { 
    alert("You must write something!");
  } else {
    document.getElementById("task").innerHTML = taskDescr;
    document.getElementById("myList").insertBefore(li, document.getElementById("myList").firstChild);
  }
}

// Remove an element when clicked on it
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myList").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {

      if (confirm('Are you sure you want to delete this task?')) {
        e.target.parentNode.removeChild(e.target);
      } else {
        return;
      }
    }
  });
});
