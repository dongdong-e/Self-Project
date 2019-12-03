const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList")

const TODOS_LOCAL_STORAGES = "toDos"
let toDos = []

function deleteToDo(event) {
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)
  const cleanToDos = toDos.filter(function(toDo) {
    console.log(li)
    console.log(toDo.id, li.id)
    // parseInt() 함수는 문자열 인자의 구문을 분석해 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환
    return toDo.id !== parseInt(li.id)
  })
  toDos = cleanToDos
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_LOCAL_STORAGES, JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1
  delBtn.innerText = "Delete"
  delBtn.addEventListener("click", deleteToDo)
  span.innerText = text
  li.appendChild(span)
  li.appendChild(delBtn)
  toDoList.appendChild(li)
  li.id = newId
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  paintToDo(currentValue)
  toDoInput.value = ""
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGES)
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text)
    })
  }
}

function init() {
  loadToDos()
  toDoForm.addEventListener("submit", handleSubmit)
}

init()
