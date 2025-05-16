// localStorage.clear()

localStorage.setItem("username", "abe123");
localStorage.setItem("theme", "dark");

const username = localStorage.getItem("username");

console.log(username);

localStorage.removeItem("username");

localStorage.setItem("id", 300);

console.log(localStorage.getItem("id"));

// Objects and Arrays
const userPreferences = {
  theme: "dark",
  notifications: {
    email: true,
    sms: false,
  },
  language: "en",
};

// JSON Stringify
localStorage.setItem("userPreferences", JSON.stringify(userPreferences));

let currUser;
// JSON Parse
try {
    currUser = JSON.parse(localStorage.getItem("userPreferences"));
    console.log(currUser.theme);
    console.log(currUser.language);
    console.log(currUser.notifications.email);
} catch (error) {
    console.error(`Error: ${error}`)
    currUser = null
}

if (currUser !== null) {
    console.log(currUser.theme);
}



console.log(localStorage);


// Session Storage
// Assume we have an input field with id="firstName"
const firstNameInput = document.getElementById('firstName');
 
// Save input value on input event
firstNameInput.addEventListener('input', (event) => {
  sessionStorage.setItem('currentFormFirstName', event.target.value);
});
 
// On page load, try to populate the field
window.addEventListener('load', () => {
  const savedFirstName = sessionStorage.getItem('currentFormFirstName');
  if (savedFirstName) {
    firstNameInput.value = savedFirstName;
  }
});
 
// When the form is successfully submitted, clear the temporary storage
document.querySelector('form').addEventListener('submit', () => {
  sessionStorage.removeItem('currentFormFirstName');
  // ... also remove other form fields from sessionStorage
});
