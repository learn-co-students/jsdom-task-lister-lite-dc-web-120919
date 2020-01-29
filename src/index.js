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
  makeNewRow(description)
}


function getTable(){
  return document.querySelector('.tr')
}

function makeNewRow(description){
  let newRow = getTable()
  // let tr = document.querySelector('.tr')
  let descriptionCell = document.createElement('td')

  descriptionCell.classList = "task"

  descriptionCell.innerText = description
  
 newRow.appendChild(descriptionCell)
  descriptionCell.id = getNewId()
  return newRow
}

function getNewId(){
   let rowLength = document.querySelectorAll(".task").length

    let currentRowLength = rowLength+1
  return `row-${currentRowLength}`
 }



