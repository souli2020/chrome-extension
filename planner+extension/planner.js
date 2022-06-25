// document.body.textContent = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"


const text =document.getElementById("monday")
const addBtn = document.getElementById("add")
const render = document.getElementById("render1")
text.addEventListener('input',(e)=>{
    e.preventDefault()
    console.log(text.value)
})

add.addEventListener('click', (e)=>{
    e.preventDefault()
    render.innerHTML += `<ul><li>${text.value}</li></ul>`
})
