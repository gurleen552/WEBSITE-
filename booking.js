/********* create variables *********/
const costPerDay = 50; 
let numDaysSelected = 0; 
let totalPrice = 0; 

// Variables to store references to DOM elements
const daysInput = document.getElementById("days-input"); 
const totalPriceElement = document.getElementById("total-price"); 

// Variables to store references to buttons and other interactive elements
const calculateButton = document.getElementById("calculate-button"); 
const resetButton = document.getElementById("reset-button"); 


/********* colour change days of week *********/

const dayButtons = document.querySelectorAll(".day-button"); 

let dayCounter = 0; 

dayButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    
    if (!clickedButton.classList.contains("clicked")) {
      dayCounter++; 
    }
    
    dayButtons.forEach((button) => {
      if (button !== clickedButton) {
        button.classList.remove("clicked");
      }
    });
    clickedButton.classList.add("clicked");
    
    // Recalculate the total price
    const totalPrice = dayCounter * costPerDay;
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
  });
});

/********* clear days *********/

const clearButton = document.getElementById("clear-button"); 

clearButton.addEventListener("click", () => {
  dayButtons.forEach((button) => {
    button.classList.remove("clicked"); 
  });
  dayCounter = 0; 
  const totalPrice = 0; 
  totalPriceElement.textContent = `Total Price: $${totalPrice}`; 
});


/********* change rate *********/

const halfButton = document.getElementById("half-button"); 
const fullButton = document.getElementById("full-button"); 

halfButton.addEventListener("click", () => {
  ratePerDay = 20; // Update the daily rate to $20
  halfButton.classList.add("clicked"); 
  fullButton.classList.remove("clicked"); 
  calculateTotal(); // Recalculate the total cost
});

fullButton.addEventListener("click", () => {
  ratePerDay = 40; 
  fullButton.classList.add("clicked"); 
  halfButton.classList.remove("clicked"); 
  calculateTotal(); 
});

fullButton.addEventListener("click", () => {
  ratePerDay = 35; 
  fullButton.classList.add("clicked"); 
  halfButton.classList.remove("clicked"); 
  calculateTotal(); // Recalculate the total cost
});


/********* calculate *********/

function calculateTotal() {
  const selectedDays = document.querySelectorAll(".day.clicked");
  const numDays = selectedDays.length; 
  const totalCost = ratePerDay * numDays; 

  const calculatedCost = document.getElementById("calculated-cost"); 
  calculatedCost.innerHTML = "$" + totalCost; 
}


