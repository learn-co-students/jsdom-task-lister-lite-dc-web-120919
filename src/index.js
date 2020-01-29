document.addEventListener("DOMContentLoaded", () => {
  
  let toDoForm = document.querySelector('form');
  toDoForm.addEventListener('submit', submitHandler)

});


function getTaskList(){

  return document.getElementById("tasks");
  // return taskList;
}

function submitHandler(event){

  event.preventDefault();
  let task = document.getElementById("new-task-description").value;
  let dueDate = document.getElementById("date-due").value;
  event.target.reset();
  addTask(task,dueDate);
}

function addTask(taskDescription, dueDate){

  let table = getTaskList();
  let newTaskRow = table.appendChild(makeNewRow(taskDescription));
  let newButton = addDeleteButton(taskDescription);
  let addPriorityButton = addPriority();
  let newDueDate = dueDateParagraph(dueDate);
  newTaskRow.appendChild(newButton);
  newTaskRow.appendChild(addPriorityButton);
  newTaskRow.appendChild(newDueDate);
  newTaskRow.style.backgroundColor = "red";
  newButton.addEventListener('click', deleteTask);
  addPriorityButton.addEventListener('change', changePriorityStatus);
}

function kebabID(inputString){
  return inputString.replace(/([a-z])([A-Z])/g, "$1-$2")
             .replace(/\s+/g, '-')
             .toLowerCase();
}

function makeNewRow(taskDescription){
  let newRow = document.createElement("li");
  newRow.innerText = taskDescription;
  newRow["id"] = taskDescription;
  return newRow;
}

function addDeleteButton(taskDescription){

  let newButton = document.createElement("button");
  newButton["id"] = taskDescription; //removed ["id"] = taskDescription 
  newButton.innerText = "X"
  return newButton;
}

function deleteTask(event){

  event.target.parentNode.remove();
}

function addPriority(){
  let priorityDropdown = document.createElement("select")

  // this option makes a dropdown with numbers instead of words 
  // for (let i = 0; i <= 2; i++){
  //   let a = i;
  //   a = document.createElement("option")
  //    let aText = String(i);
  //   a.text = aText;
  //   priorityDropdown.add(a);
  // }
  //
  let priority1 = document.createElement("option")
  let priority2 = document.createElement("option")
  let priority3 = document.createElement("option")
  priority1.text = "High"
  priority2.text = "Medium"
  priority3.text = "Low"
  // priorityDropdown.onchange = changePriorityStatus();
  priorityDropdown["onchange"] = "sample text";
  priorityDropdown.add(priority1)
  priorityDropdown.add(priority2)
  priorityDropdown.add(priority3)
return priorityDropdown
}

function changePriorityStatus(){
  let priorityStatus = event.currentTarget.value
  alert(`Changed priority to ${priorityStatus}`);
  if (priorityStatus === "Medium"){event.target.parentElement.style.backgroundColor = "yellow"}
  if (priorityStatus === "High"){event.target.parentElement.style.backgroundColor = "red"}
  if (priorityStatus === "Low"){event.target.parentElement.style.backgroundColor = "green"}
}

function dueDateParagraph(dueDate){
  let dueDateP = document.createElement("p")
  dueDateP.innerText = "Due Date: " + dueDate
  return dueDateP
}