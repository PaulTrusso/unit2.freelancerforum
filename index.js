// div that covers the whole page
const root = document.getElementById("root");

const maxFreelancer = 8;

const table = [
  { name: "Alice", price: 25, occupation: "gardener" },
  { name: "Bob", price: 51, occupation: "programmer" },
  { name: "Carol", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//   div that holds all the other divs
const ele = document.createElement("div");
ele.classList.add("maintable");
// creating static elements in the main ele div

const title = document.createElement("h1");
title.innerHTML = "Freelancer Forum";

const avgprice = document.createElement("h2");
avgprice.innerHTML = "add function";

const available = document.createElement("h1");
available.innerHTML = "Available Freelancers";

const ele2 = document.createElement("div");
ele2.classList.add("ele22");

// new div created to hold the table of freelancers
const info = document.createElement("div");
info.classList.add("infodiv");

// table.forEach((itm) => {
//   const name = document.createElement("h3");
//   name.innerHTML = `${itm.name}, ${itm.occupation}, ${itm.price}` ;

//   info.appendChild(name);
// });
const displayedPrice= [];


function renderItem(item) {
    const h3 = document.createElement("h3");
    h3.innerHTML = `${item.name}, ${item.occupation}, ${item.price}`;
    info.appendChild(h3);

    displayedPrice.push(item);

    displaySum();
}


function displaySum() {
    const sum = displayedPrice.reduce((acc, item) => acc + item.price, 0);
    avgprice.innerHTML = `<p>: The average starting price is ${sum}</p>`;
  }


for (let i = 0; i < 3; i++) {
    renderItem(table[i]);
  }

  let currentIndex = 3;


  function addNewItem() {
    if (currentIndex < table.length) {
      renderItem(table[currentIndex]);
      currentIndex++;
    }
  }

  const intervalId = setInterval(addNewItem, 3000);

// const info2 = document.createElement("div");
// info2.classList.add("infodiv");




// function getSum(price) {
//     for (let i = 0; i < numbers.length; i++) {
//       sum = price[i];
//     }
//     return sum;

//   }

// for each loop to setup table
// table.forEach((itm)=>{
//     const tbbox = document.createElement('div');
//     tbbox.classList.add('freelancer');
//     const nam =document.createElement('h4');
//     nam.innerHTML=itm.name
//     const occupation =document.createElement('h4');
//     occupation.innerHTML=itm.occupation
//     const price = document.createElement('h4');
//     price.innerHTML=itm.price

//     info.appendChild(price);
// info.appendChild(occupation);
// info.appendChild(nam);
// info.appendChild(tbbox);
// } )

// function render() {
//     const
// }

// render();
//  if (table.length >= maxFreelancer){
//     clearInterval(addFreelancerIntervalId)
//  }

ele.appendChild(title);
ele.appendChild(avgprice);
ele.appendChild(available);

ele2.appendChild(info);
// ele2.appendChild(info2);
root.appendChild(ele);
root.appendChild(ele2);
