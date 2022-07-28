document.getElementById('submitToDo').addEventListener('click', () => {
    let inputToDo = document.getElementById('inputTo').value
    
    if (inputToDo == '') return

    if (localStorage.getItem('toDoListItem') !== null) {
        const person = localStorage.getItem('toDoListItem')
        const raw =  JSON.parse(person)
        raw.push(inputToDo)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    } else {
        const raw = []
        raw.push(inputToDo)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    }   
    
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

    doneBtn.addEventListener('click', function(){
        newUl.remove()
        const person = localStorage.getItem('toDoListItem')
        const raw =  JSON.parse(person)
        const countIndex = raw.indexOf(inputToDo)
        raw.splice(countIndex, 1)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    })
    delBtn.addEventListener('click', function(){
        newUl.remove()
        const person = localStorage.getItem('toDoListItem')
        const raw =  JSON.parse(person)
        const countIndex = raw.indexOf(inputToDo)
        raw.splice(countIndex, 1)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    })
   
    clearInput()
}) 

function clearInput() {
    let clear = document.getElementById('inputTo')
    clear.value = ''
}

document.getElementById('clearLS').addEventListener('click', () => {
    localStorage.clear()
    document.querySelectorAll("ul").forEach(e => e.remove());
})

window.addEventListener('load', () => {
    const test = localStorage.getItem('toDoListItem')
    const toDoListLS = JSON.parse(test)
    if (toDoListLS == null || toDoListLS == '') return
    toDoListLS.forEach(inputToDo => {
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

    doneBtn.addEventListener('click', function(){
        newUl.remove()
        const person = localStorage.getItem('toDoListItem')
        const raw =  JSON.parse(person)
        const countIndex = raw.indexOf(inputToDo)
        raw.splice(countIndex, 1)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    })
    delBtn.addEventListener('click', function(){
        newUl.remove()
        const person = localStorage.getItem('toDoListItem')
        const raw =  JSON.parse(person)
        const countIndex = raw.indexOf(inputToDo)
        raw.splice(countIndex, 1)
        localStorage.setItem('toDoListItem', JSON.stringify(raw))
    })
    })
})