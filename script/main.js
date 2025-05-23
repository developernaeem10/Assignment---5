document.getElementById('new').addEventListener('click', function (){
    window.location.href="../blog.html"
})

// Body theme Change
// document.getElementById('random-theme').addEventListener('click', function (){
//     document.getElementById('body').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// })

document.getElementById('random-theme').addEventListener('click', function (){
    let random = ['#f49a8d', '#fdb510', '#f5e1d3', '#f7e0d2', '#92a8d1', '#f7cac9', '#cb005d', '#ff0000', '#ded2d2', '#c7c3bd', '#282828', '#9542f5', '#b642f5']

    let rand = Math.floor(Math.random() * random.length) + 1
    console.log(rand)
    document.getElementById('body').style.backgroundColor = random[rand]
})

// Current date

const crDate = new Date()

const day = crDate.getDate()
console.log(day)
const weekday = crDate.getDay()
console.log(weekday)
const month = crDate.getMonth() + 1
console.log(month)
const year = crDate.getFullYear()
console.log(year)

const options = {
    weekday : 'short', 
    year  : 'numeric',
    month : 'short',
    day : 'numeric'
}

const formattedDateString = crDate.toLocaleDateString("en-CA", options);


document.getElementById('current-date').innerText = formattedDateString

console.log(formattedDateString)





