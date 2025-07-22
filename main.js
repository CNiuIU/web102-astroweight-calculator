// Write your JavaScript code here!
const gravityFactors = {
  "Pluto": 0.06,
  "Neptune": 1.19,
  "Uranus": 0.92,
  "Saturn": 0.93,
  "Jupiter": 2.34,
  "Mars": 0.38,
  "Moon": 0.166,
  "Earth": 1,
  "Venus": 0.91,
  "Mercury": 0.38,
  "Sun": 27.01
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