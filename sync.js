let success = false

const promiseExample = new Promise((resolve, reject) => {
    if(success) {
        resolve("Database connected")
    } else {
        reject("Something went wrong!")
    }
})

promiseExample.then((result) => console.log(result)).catch((error) => console.log(error))

const fetchData = async () => {
    try {
        const response = await fetch("https://dragonball-api.com/api/characters")

        const data = await response.json()

        // console.log(data)

        const characters = data.items

        characters.map((character, index) => {
            console.log(`${index + 1}: ${character.name}`)
        })

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

fetchData()


setTimeout(() => {
    console.log("I will take time!")
}, 4000)


let count = 0

const id = setInterval(() => {
    count++;

    console.log("Tick:", count)
    console.log("I will run every 2s")

    if(count === 5) {
        clearInterval(id)
    }

}, 2000)

