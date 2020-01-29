document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("connected")
  let form = document.querySelector("form")
  form.addEventListener('submit', submitHandler)
});

function makeNewListItem(newTask){

  console.log("switched to makeNewListItem")
  let listItem = document.createElement("li")
  console.log(listItem)
  listItem.innerText = newTask
  return listItem

}


function addTaskToForm(newTask) {
  console.log("switched to taskToForm")
  let taskList = document.querySelector("ul")
  console.log(taskList)
  let newListItem = makeNewListItem(newTask)
  
  taskList.appendChild(newListItem)
}

function submitHandler(event){
  event.preventDefault()
  let newTask = document.getElementById("new-task-description").value
  console.log("submit clicked, form submitted")
  console.log(newTask)
  addTaskToForm(newTask)
  document.addEventListener('submit', changeBackgroudColor)
}

function changeBackgroudColor(){
  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r1 + "," + r2 + "," + r3 + ")";
  document.body.style.backgroundColor = bgColor
}
