const nodeList = document.querySelectorAll(".item");
const htmlCollection = document.getElementsByClassName("item");

console.log("NodeList:", nodeList); // Static list
console.log("HTMLCollection:", htmlCollection); // Live collection

// Adding a new element
const newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "4000";
document.body.appendChild(newItem);

console.log("Updated NodeList:", nodeList); // Still 3 items
console.log("Updated HTMLCollection:", htmlCollection); // Now 4 items

console.log(nodeList[0]);
console.log(nodeList.length);

console.log(htmlCollection[0]);
console.log(htmlCollection.length);

// let heroSection = document.getElementById('hero');

// console.log(heroSection);
// // console.dir(heroSection);

// let p = document.querySelector('section > p');
// console.log(p);

// let pTextCenter = document.querySelectorAll('.text-center')
// console.log(pTextCenter);

// // change the element's content
// let servicesP = document.querySelector('p.services');
// console.log(servicesP);

// servicesP.innerText = "Best pc parts in the market"

// // Add an event listener
// let button = document.querySelector('#services-button');
// console.log(button);

// button.addEventListener('click', function() {
//     console.log('Button clicked');
// })

// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);
// const section = document.body.firstElementChild.nextElementSibling.nextElementSibling

// console.dir(section.children[2]);
