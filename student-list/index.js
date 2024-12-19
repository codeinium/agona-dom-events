let nameInputValue
let groupInputValue 

const nameInput = document.getElementById("name-input")
const groupInput = document.getElementById("group-input")
const dataTable = document.getElementById("data-table")
const dataTableBody = dataTable.querySelector("tbody")
const addButton = document.getElementById("add-btn")
const errorDiv = document.querySelector(".error")
const clearButton = document.getElementById("clear-btn")
const formData = document.getElementById("data-form")

errorDiv.style.display = "none"

nameInput.addEventListener("input", (e) => {
  nameInputValue = e.target.value
})

groupInput.addEventListener("input", (e) => {
  groupInputValue = e.target.value
})

function createTableRow() {
  const fragment = document.createDocumentFragment()
  const tr = document.createElement("tr")
  const tdName = document.createElement("td")
  const tdGroup = document.createElement("td")
  const tdButton = document.createElement("td")
  const btn = document.createElement("button")

  tdName.textContent = nameInputValue
  tr.appendChild(tdName)
  tdGroup.textContent = groupInputValue
  tr.appendChild(tdGroup)
  btn.textContent = "X"
  btn.classList = "remove-btn"
  tdButton.appendChild(btn)
  tr.appendChild(tdName)
  tr.appendChild(tdGroup)
  tr.appendChild(tdButton)

  fragment.appendChild(tr)
  dataTableBody.appendChild(fragment)
}

function clearInputs() {
  nameInputValue = ""
  groupInputValue = ""
  nameInput.value = ""
  groupInput.value = ""
}

formData.addEventListener("submit", (e) => {
  e.preventDefault()
  if (nameInputValue && groupInputValue) {
    errorDiv.style.display = "none"
    createTableRow()
    clearInputs()
    Array.from(document.querySelectorAll(".remove-btn")).forEach((item) => {
      addListenerRemoveButton(item)
    })
  } else {
    errorDiv.style.display = "block"
  }
})

clearButton.addEventListener("click", (e) => {
  dataTableBody.innerHTML = null
})

function handleClick(e) {
  const tableRow = e.target.parentNode.parentNode
  tableRow.innerHTML = null
  e.target.removeEventListener("click", handleClick)
}

function addListenerRemoveButton(removeButton) {
  removeButton.addEventListener("click", (e) => handleClick(e))
}

Array.from(document.querySelectorAll(".remove-btn")).forEach((item) => {
  addListenerRemoveButton(item)
})