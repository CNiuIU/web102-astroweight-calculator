// Write your JavaScript code here!
// Planet data: [name, gravity factor]
var planets = [ 
  ['Pluto', 0.06], 
  ['Neptune', 1.148], 
  ['Uranus', 0.917], 
  ['Saturn', 1.139], 
  ['Jupiter', 2.640], 
  ['Mars', 0.3895], 
  ['Moon', 0.1655], 
  ['Earth', 1], 
  ['Venus', 0.9032], 
  ['Mercury', 0.377], 
  ['Sun', 27.9] 
];

// 1. Populate the dropdown in reverse order (Sun first)
const select = document.getElementById("planets");
planets.slice().reverse().forEach(([name, gravity]) => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
});

// 2. Function to calculate new weight
function calculateWeight(weight, planetName) {
  const planet = planets.find(([name]) => name === planetName);
  if (!planet) return null;
  const gravity = planet[1];
  return weight * gravity;
}

// 3–6. Handle button click
function handleClickEvent(e) {
  const userWeight = parseFloat(document.getElementById("user-weight").value);
  const planetName = document.getElementById("planets").value;
  const output = document.getElementById("output");

  if (isNaN(userWeight)) {
    output.textContent = "Please enter a valid number for weight.";
    return;
  }

  const result = calculateWeight(userWeight, planetName);
  if (result === null) {
    output.textContent = "Planet not found.";
    return;
  }

  output.textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
}

// 7. Attach event listener
document.getElementById("calculate-button").onclick = handleClickEvent;
