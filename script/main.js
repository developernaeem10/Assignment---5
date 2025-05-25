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
  btn.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    event.target.setAttribute("disabled", true);
    event.target.classList.remove("cursor-pointer");
    event.target.classList.add("cursor-not-allowed");
    event.target.classList.add("bg-gray-200");
    
    // btn.setAttribute("disabled", true);
    // btn.classList.remove("cursor-pointer");
    // btn.classList.add("cursor-not-allowed");
    // btn.classList.add("bg-gray-200");
    
    const reduceNum = document.getElementById("reduce-num").innerText;
    const convertedReduceNum = parseFloat(reduceNum);
    const minus = convertedReduceNum - 1;
    document.getElementById("reduce-num").innerText = minus;
    
    const increaseNum = document.getElementById("increase-number").innerText;
    const convertedIncreaseNum = parseFloat(increaseNum);
    const increase = convertedIncreaseNum + 1;
    document.getElementById("increase-number").innerText = increase;
    
    const newDiv = document.getElementById("new-div");
    // // console.log(newDiv.childNodes.length);
    // if (newDiv.childNodes.length === 6) {
    //   return alert("hello");
    // }
    const p = document.createElement("p");
    p.classList.add("p-2", "text-sm", "text-md", "mb-3", "bg-[#F4F7FF]");
    p.textContent = `You have completed the task
    `;
    newDiv.appendChild(p);

    document
      .getElementById("clear-history")
      .addEventListener("click", function () {
        document.getElementById("new-div").innerHTML = "";
      });

    // const titles = document.querySelectorAll('.title-show')
    // for (const title of titles ){
    //   const ttl = title.textContent
    //   return ttl
    // }

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
