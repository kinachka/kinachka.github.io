let inputToDo = ''

document.getElementById('submitToDo').addEventListener('click', hello) 

function hello() {
    inputToDo = document.getElementById('inputTo').value

    if (inputToDo == '') return

    const newUl = document.createElement("ul")
    document.body.appendChild(newUl)

    const firstLi = document.createElement("li")
    const toDoThing = document.createTextNode(inputToDo)
    firstLi.appendChild(toDoThing)
    newUl.appendChild(firstLi)

    const secondLi = document.createElement("li")
    const doneBtn = document.createElement('button')
    doneBtn.innerText = 'Done'
    secondLi.appendChild(doneBtn)
    newUl.appendChild(secondLi)

    const thirdLi = document.createElement("li")
    const delBtn = document.createElement('button')
    delBtn.innerText = 'X'
    thirdLi.appendChild(delBtn)
    newUl.appendChild(thirdLi)

    doneBtn.addEventListener('click', function(){newUl.remove()})
    delBtn.addEventListener('click', function(){newUl.remove()})
   
    clearInput()
}

function clearInput() {
    let clear = document.getElementById('inputTo')
    clear.value = ''
}




