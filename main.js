// Write your JavaScript code here!
const gravityFactors = {
  "Pluto": 0.06,     
  "Neptune": 1.148,  
  "Uranus": 0.917,   
  "Saturn": 1.139,   
  "Jupiter": 2.64,   
  "Mars": 0.3895,    
  "Moon": 0.1655,    
  "Earth": 1.0,      
  "Venus": 0.9032,   
  "Mercury": 0.377,  
  "Sun": 27.9        
};

document.getElementById("calculate-button").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("user-weight").value);
  const planet = document.getElementById("planets").value;
  const output = document.getElementById("output");

  if (isNaN(weight)) {
    output.textContent = "Please enter a valid number for weight.";
    return;
  }

  const gravity = gravityFactors[planet];
  const expected = (weight * gravity).toFixed(2);

  output.textContent = `If you were on ${planet}, you would weigh ${expected}lbs!`;
});