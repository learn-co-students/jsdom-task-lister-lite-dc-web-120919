document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("connected")
  let form = document.querySelector("form")
  form.addEventListener('submit', submitHandler)
});

function makeNewListItem(newTask, newTaskDueDate){

  console.log("switched to makeNewListItem")
  let listItem = document.createElement("li")
  let nestedList = document.createElement("ul")
  let listItemDueDate = document.createElement("li")
  console.log(listItem)
  listItem.innerText = newTask
  listItemDueDate.innerText = newTaskDueDate
  nestedList.appendChild(listItemDueDate)
  listItem.appendChild(nestedList)
  return listItem
}


function addTaskToForm(newTask, newTaskDueDate) {
  console.log("switched to taskToForm")
  let taskList = document.querySelector("ol")
  console.log(taskList)
  let newListItem = makeNewListItem(newTask, newTaskDueDate)
  
  taskList.appendChild(newListItem)
}

function submitHandler(event){
  event.preventDefault()
  let newTask = document.getElementById("new-task-description").value
  let newTaskDueDate = document.getElementById("new-task-due-date").value
  console.log("submit clicked, form submitted")
  console.log(newTask)
  console.log(newTaskDueDate)
  addTaskToForm(newTask, newTaskDueDate)
  document.addEventListener('submit', changeBackgroudColor)
}

function changeBackgroudColor(){
  let bgColor1 = {
    r1: Math.floor(Math.random() * 256),
    r2: Math.floor(Math.random() * 256),
    r3: Math.floor(Math.random() * 256)
  }
  let bgColor2 = {
    r1: Math.floor(Math.random() * 256),
    r2: Math.floor(Math.random() * 256),
    r3: Math.floor(Math.random() * 256)
  }
   bgColor1.rgb = 'rgb(' + bgColor1.r1 + ', ' + bgColor1.r2 + ', ' + bgColor1.r3 + ')';
   bgColor2.rgb = 'rgb(' + bgColor2.r1 + ', ' + bgColor2.r2 + ', ' + bgColor2.r3 + ')';
  document.body.style.background = 'linear-gradient('+bgColor1.rgb+', '+bgColor2.rgb+')';
}

