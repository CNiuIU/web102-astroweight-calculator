// Write your JavaScript code here!
// Given Planet data: [name, gravity factor]
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
// referencees the <select> in HTML with the ID "planets"
// where the var planets will be added to the dropdown menu
planets.slice().reverse().forEach(([name, gravity]) => {
    //slice creates a shallow copy, then reverse the list so Sun goes first
    // forEach takes the items in var planets and does "something" with it
  const option = document.createElement("option");
//telling the browser to make a blank <option> drop down tag that can fill with stuff later
  option.value = name;
  option.textContent = name;
  //sets the value and the text for <option>
  select.appendChild(option);
  //making the dropdown menu
});

// 2. Function to calculate new weight 
// - given a weight and name of a planet, return what the weight would be on that planet
function calculateWeight(weight, planetName) {
  const planet = planets.find(([name]) => name === planetName);
  if (!planet) return null;
  //searches with .find in the planet array , 
  // matches the planet the user picks in the drop down to the planet in the var planets
  //there's no input by the user in terms of planet name, it is a dropdown menu
   //if the planet.find fails to find planet and returns undefined, returns null 

  const gravity = planet[1];
  return weight * gravity;
}

// 3–6. Handle button click
function handleClickEvent(e) { 
    //run when user clicks "Calculate"
  const weightInput = document.getElementById("user-weight").value;
  //gets value from user input field and puts in weightInput
  const planetName = document.getElementById("planets").value;
  //gets value from dropdown menu and puts in planetName
  const output = document.getElementById("output");
  //creates output so we can put in the output text

  // allows whole numbers or decimals only
  if (!/^\d+(\.\d+)?$/.test(weightInput)) {
    output.textContent = "Please enter a valid number (no letters or symbols).";
    return;
  }

  const userWeight = parseFloat(weightInput);
  const result = calculateWeight(userWeight, planetName);

  const planetDisplayName = (planetName === "Sun" || planetName === "Moon") ? `the ${planetName}` : planetName;
  output.textContent = `If you were on ${planetDisplayName}, you would weigh ${result.toFixed(2)}lbs!`;
}


// 8. Pluto checkbox functionality
document.getElementById("toggle-pluto").addEventListener("change", function (e) {
  //looking for toggle-pluto, adds eventListener for "change" ie checking the box (e for event)
  const isChecked = e.target.checked;
  if (isChecked) {
    // Remove Pluto from the list
    planets = planets.filter(([name]) => name !== "Pluto");
    //.filter creates a new array without pluto
  } else {
    // Add Pluto back if it's missing
    const alreadyThere = planets.some(([name]) => name === "Pluto");
    if (!alreadyThere) {
      planets.unshift(["Pluto", 0.06]); // Add to beginning
    }
  }
  // Re-populate dropdown, clears and rebuilds dropdown menu
  repopulateDropdown();
});

// 9. Add new planet functionality
document.getElementById("add-planet-button").addEventListener("click", function () {
  //another event listener, this time for the add-planet-button
  const nameInput = document.getElementById("new-planet-name");
  const multiplierInput = document.getElementById("new-planet-multiplier");
//holds new input information
  const newName = nameInput.value.trim();
  //.value takes userinput
  //.trim removes whitespace at start and end of string
  const newMultiplier = parseFloat(multiplierInput.value);
//takes userinput, converts from string to number, stores in newMultiplier
  if (!newName || isNaN(newMultiplier)) {
    alert("Please enter a valid planet name and gravity multiplier.");
    return;
    //checks if newName is empty or newMultiplier is not a number
    //errors if do
  }

  // Prevent duplicates
  if (planets.some(([name]) => name.toLowerCase() === newName.toLowerCase())) {
    alert("Planet already exists in the list.");
    return;
  }

  planets.push([newName, newMultiplier]);
  //adding new planet to dropdown
  repopulateDropdown();
  //refreshes dropdown menu to include the added planet

  // Clear inputs for any new planets
  nameInput.value = '';
  multiplierInput.value = '';
});

// Re-populate dropdown
function repopulateDropdown() {
  select.innerHTML = '';
  planets.slice().reverse().forEach(([name]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
}


// 7. Attach event listener
document.getElementById("calculate-button").onclick = handleClickEvent;
//telling what the calculate button is supposed to do 

