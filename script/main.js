document.getElementById("new").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

// Body theme Change
// document.getElementById('random-theme').addEventListener('click', function (){
//     document.getElementById('body').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// })

document.getElementById("random-theme").addEventListener("click", function () {
  let random = [
    "#f49a8d",
    "#fdb510",
    "#f5e1d3",
    "#f7e0d2",
    "#92a8d1",
    "#f7cac9",
    "#cb005d",
    "#ff0000",
    "#ded2d2",
    "#c7c3bd",
    "#282828",
    "#9542f5",
    "#b642f5",
  ];

  let rand = Math.floor(Math.random() * random.length) + 1;
  document.getElementById("body").style.backgroundColor = random[rand];
});

// Current date
const crDate = new Date();

// const day = crDate.getDate();
// const weekday = crDate.getDay();
// const month = crDate.getMonth() + 1;
// const year = crDate.getFullYear();

const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const formattedDateString = crDate.toLocaleDateString("en-CA", options);
document.getElementById("current-date").innerText = formattedDateString;

// Main
const allBtn = document.querySelectorAll(".all-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function () {
    alert("Board Updated Successfully");
    const reduceNum = document.getElementById("reduce-num").innerText;
    const convertedReduceNum = parseFloat(reduceNum);
    const minus = convertedReduceNum - 1;
    document.getElementById("reduce-num").innerText = minus;

    const increaseNum = document.getElementById("increase-number").innerText;
    const convertedIncreaseNum = parseFloat(increaseNum);
    const increase = convertedIncreaseNum + 1
    document.getElementById("increase-number").innerText = increase

    const newDiv = document.getElementById('new-div')
    const div = document.createElement('div')
    div.innerHTML = `<p>You have completed the task</p>
    `
    newDiv.appendChild(div)


    // div.innerText = 'dgdfgd'
    // newDiv.appendChild(div)
    // console.log(newDiv)
  });
}

// document.querySelectorAll('.all-btn').addEventListener('click', function (){
//   console.log('hello')
// })

// function handleclick(test){
//   console.log(test)
// }
