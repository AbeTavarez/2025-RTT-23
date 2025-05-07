

let heroSection = document.getElementById('hero');

console.log(heroSection);
// console.dir(heroSection);

let p = document.querySelector('section > p');
console.log(p);

let pTextCenter = document.querySelectorAll('.text-center')
console.log(pTextCenter);


// change the element's content
let servicesP = document.querySelector('p.services');
console.log(servicesP);

servicesP.innerText = "Best pc parts in the market"


// Add an event listener
let button = document.querySelector('#services-button');
console.log(button);

button.addEventListener('click', function() {
    console.log('Button clicked');
})
