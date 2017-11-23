// Global variables
var result = 0;
var last_value = null;

// Init result screen
updateResult();

// Update result with clicked number
function clickNumber(button) {
  var number = button.innerHTML
  console.log('Click on ' + number);
  result = result + number;
  updateResult();
}

// Clear the result screen
function clearScreen() {
  console.log('Variables result & last_value set to 0');
  result = 0;
  last_value = 0;
  updateResult();
}

// Display result in screen results
function updateResult() {
  console.log('Screen result updated');
  document.getElementById('screen').innerHTML = parseInt(result);
}
