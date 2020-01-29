document.addEventListener("DOMContentLoaded", () => {

  const submitBtn = document.querySelector("#submit")
  submitBtn.addEventListener('click', submitHandler)

  const h2 = document.querySelector("h2")
  h2.addEventListener('click', ()=>{console.log("h2 has been clicked")})
  
  console.log("connected")
});

// store a task
function submitHandler(event){
  event.preventDefault()
  const userInput = document.getElementById("new-task-description")

  let description =  userInput.value
  console.log("submitBtn has been clicked")
  addDescription(description)
}


function getTable(){
  return document.querySelector('.body')
}

function addDescription(description){
  let table = getTable()
  let newRow = makeNewRow(description)
  table.appendChild(newRow)
}


function makeNewRow(description){
// let newRow = document.createElement('tr')
let body = document.querySelector('.body')
let  descriptionCell = document.createElement('td')
descriptionCell.classList = "task"

descriptionCell.innerText = description

body.appendChild(descriptionCell)
newRow.id = getNewId()
return body
}

// change the id base on which they are in 
// section in table


 function getNewId(){
   let rowLength = document.querySelectorAll(".task").length
  //  debugger
    let currentRowLength = rowLength+1
  return `row-${currentRowLength}`
 }



