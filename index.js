
let name = "Alex"
name = 'Lanre'

// let name = "Me"

const age = 50

console.log(name, age)

console.log(school)

var school = "Bloomy"

let isRaining = false
let isSunny = true

let address;

let user = null

console.log(typeof user)

console.log(greet("Alex"))


function greet(name) {
    return "Hello" + " " + name
}

greet("Lanre")

const person = {
    name: "Lanre",
    age: 50,
    isRaining: false,
    isSunny: true,
    address: undefined,
    user: null,
    greet: function() {
        return "Hello" + " " + this.name
    }
}


console.log(person.name) // dot notation
console.log(person["name"]) // bracket notation
console.log(person.greet()) // method

const items = ["Lanre", 23, true, null, undefined, ["apples", "oranges"], {address: "Ikeja", state: "Lagos"}]

console.log(items[6].state)

let num = 30

let num2 = 10

console.log(num + num2)


console.log(3 !== "3")
console.log(3 >= 0)
console.log(7 === 7 && 5 === "5" && 3 < 3)
console.log(7 === 7 || 5 === "5" || 3 < 3)

console.table(items)

console.warn("File corrupted!")

console.error("Fetch failed!")

const now = new Date()

const year = now.getFullYear()

console.log(year)

console.log(now.toDateString())

console.log(now.toUTCString())

console.log(now.getMonth())

console.log(now.getDay())

const yearInJs = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let message = `Hello I am ${name}, I am ${age} years old.`

console.log(message)

const random = Math.random()

console.log(Math.floor(random * 10))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Math.max(...numbers))

function addNumbers(num1, num2) {
    return num1 + num2
}

console.log(addNumbers(15, 20))

const multiplyNumbers = (num1, num2, num3) => num1 * num2 * num3

console.log(multiplyNumbers(10, 20, 30))

const greetUser = function(name) {
    return `Hello, ${name}`
}

console.log(greetUser("Lanre"))

let word = "stable"

console.log(word.toUpperCase())

console.log(word.trim())
console.log(word.length)
console.log(word.trim().length)
console.log(word.includes("z"))
console.log(word.startsWith(" "))
console.log(word.charAt(0))
console.log(word.split(" "))

let digit = 34.506789

console.log(digit.toFixed(2))

console.log(isNaN(digit))
console.log(digit.toString(2))

let accountBalance = "12000000"
console.log(typeof Number(accountBalance))
console.log(Number(accountBalance).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN"
}))

const student = {
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science", "English"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}

let objectKeys = Object.keys(student)

console.log(objectKeys)

let objectValues = Object.values(student)

console.log(objectValues)

let objectEntries = Object.entries(student)

console.log(objectEntries)

const listofGames = ["Efootball", "EAFC26", "GTA5", "Red Dead Redemption"]

// listofGames.push("GTA5", "Red Dead Redemption")
// listofGames.pop()
// listofGames.shift()
// listofGames.unshift("COD", "Apex Legends")

listofGames.splice(0, 2)

console.table(listofGames)

const sorted = numbers.sort((a, b) => b - a)

console.table(sorted)

console.log(listofGames.reverse())

const studentNames = ["Lanre", "Alex", "John", "Jane", "Bob"]

console.log(studentNames.slice(1, 4))

const newArray = studentNames.concat(numbers)

console.table(newArray)

const hobbies = ["football", "basketball", "videogames", "coding"]

let sentence = `My hobbies are: ${hobbies.join(" ")}`

console.log(sentence)

console.log(hobbies.includes("football"))



function inspectObject(obj) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const lengthofKeys = keys.length
    const propertyNames = keys.join(", ")
    const hasId = keys.includes("id")
    
    console.log(`Number of keys or property names: ${lengthofKeys}`)
    console.log(`All values: ${values}`)
    console.log(`Property names: ${propertyNames}`)
    console.log(`Has id: ${hasId}`)
}

inspectObject(student)
inspectObject(person)


const multiplesofTen = [10, 20, 30, 40, 50 , 60, 70, 80, 90, 100]

const multiplyByTwo = multiplesofTen.map(function (num, index) {
   return `${index + 1}: ${num * 2}`
})

console.log(multiplyByTwo)

const checkEven = numbers.filter(function (num) {
    return num % 2 === 0
})

console.log(checkEven)

const users = [
    {id: 1, name: "Lanre", age: 20, email: "lanre@gmail.com"},
    {id: 2, name: "Alex", age: 25, email: "alex@gmail.com"},
    {id: 3, name: "John", age: 30, email: "john@gmail.com"},
    {id: 4, name: "Jane", age: 35, email: "lanre@gmail.com"},
    {id: 5, name: "Bob", age: 40, email: "bob@gmail.com"}
]


const findOne = users.find(function (user) {
    return user.email === "lanre@gmail.com"
})

console.log(findOne)

const reduced = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log(reduced)

const someValues = numbers.every(function (num) {
    return num > 5
})

console.log(someValues)

const products = [
  { name: 'Shirt',  price: 25, inStock: true  },
  { name: 'Shoes',  price: 80, inStock: false },
  { name: 'Hat',    price: 15, inStock: true  },
];

const getInStock = products.filter(function (item) {
    return item.inStock === true
})

console.log(getInStock)

const sumofInstock = getInStock.reduce(function(accumulator, currentValue) {
   return accumulator.price + currentValue.price
})

console.log(sumofInstock)

let weather = "stormy"

if(weather == "rainy") {
    console.log("Take na umbrella")
} else if(weather == "sunny") {
    console.log("Wear sunglasses")
} else if(weather == "snowing") {
    console.log("Stay home")
} else {
    console.log("Do nothing.")
}


let score = 20

switch (true) {
    case score > 100 && score < 0:
        console.log("Invalid score")
        break;
        case score <= 100 && score >= 85:
            console.log("A")
            break;
        case score <= 84 && score >= 70:
            console.log("B")
            break;
        case score <= 69 && score >= 60:
            console.log("C")
            break;
        case score <= 59 && score >= 50:
            console.log("D")
            break;
        case score <= 49 && score >= 40:
            console.log("E")
            break;
        default:
            console.log("Fail")
            break;
}

const status = age >= 18 ? "Adult" : "Minor"

console.log(status)

const original = ['banana','apple','mango','orange','grape']

original.push("Pineapple")

original.pop()

original.shift()

original.splice(0,1, "watermelon")

console.log(original)

const students = [
  { name: 'Adaeze', grade: 85, city: 'Lagos',  passed: true  },
  { name: 'Emeka',  grade: 42, city: 'Abuja',  passed: false },
  { name: 'Chioma', grade: 91, city: 'Lagos',  passed: true  },
  { name: 'Tunde',  grade: 38, city: 'Lagos',  passed: false },
  { name: 'Ngozi',  grade: 76, city: 'Enugu',  passed: true  },
];

const studentNamess = students.map(function (student) {
    return student.name
})

console.log(studentNamess)

const checkforPassed = students.filter(function (student) {
    return student.passed === true
})

console.log(checkforPassed)

const studentLocation = students.find(function (student) {
    return student.city == "Abuja"
})

console.log(studentLocation)

const sumScore = students.reduce(function (acc, curr) {
    return acc + curr.grade
}, 0)

console.log(sumScore)


const apiData = [
  {id:1, name:'Wireless Headphones', price:59.99,  cat:'electronics', rating:4.5, qty:12},
  {id:2, name:'Coffee Maker',        price:89.99,  cat:'kitchen',     rating:4.8, qty:0 },
  {id:3, name:'Running Shoes',       price:119.99, cat:'sports',      rating:4.2, qty:7 },
  {id:4, name:'Bluetooth Speaker',   price:39.99,  cat:'electronics', rating:4.6, qty:25},
  {id:5, name:'Yoga Mat',            price:29.99,  cat:'sports',      rating:3.9, qty:15},
];

const availableProducts = apiData.filter(item => item.qty > 0)

console.log(availableProducts)

const productCard = apiData.map((item, index) => {
    return `
    <div>
         <ul>
         <li>
         ${item.name} || ${item.price.toFixed(2)} || ${item.rating} || ${item.qty > 0 ? 'In-Stock' : 'Out of Stock'}
         </li>
         </ul>
         </div>
    `
})

console.log(productCard)