
// const title = document.getElementById("title")

// console.log(title)

const title = document.querySelector("#title")

console.log(title)

title.textContent = "New Heading"

title.innerHTML = "<p> Bold text </p>"

title.style.color = "red"

const body = document.body

body.style.backgroundColor = "blue"

const container = document.createElement("div")

container.style.backgroundColor = "white"

container.style.width = "20rem"

container.style.height = "20rem"

document.body.append(container)

container.remove()

const btn = document.getElementById("btn")

btn.addEventListener("click", function (event) {
    alert("Button was clicked!")
})
