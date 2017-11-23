// Global variables
var result = 0;
var last_value = null;
var current_operator = null;

// Init result screen
updateScreen();

// Action for click on a number
function clickNumber(button) {
  var number = button.innerHTML;
  console.log('Click on ' + number);

  // Add number to result
  result = result + number;
  updateScreen();
}

// Action for click on an operator
function clickOperator(button) {
  var operator = button.innerHTML;
  console.log('Click on ' + operator);

  // Caculated last operation
  console.log('Calculate last operation');
  updateResults();

  // Save the result in last_value and we clear the screen
  last_value = result;
  calculate = true;
  result = 0;
  
  // Save the operator
  current_operator = operator;
}

// Clear the result screen
function clearScreen() {
  console.log('Variables result & last_value set to 0');
  
  // Reset all values
  result = 0;
  last_value = null;
  current_operator = null;
  
  // Update screen
  updateScreen();
}

// Display result in screen results
function updateResults() {
  console.log('Result updated');

  // Need to calculate ?
  if(last_value != null && current_operator != null) {

    // Check wich operator we need to use
    switch(current_operator) {
      case "+":
          result = result + last_value;
          break;
      case "-":
          result = last_value - result;
          break;
      case "*":
          result = last_value * result;
          break;
      case "/":
          result = last_value / result;      
          break;
    }

    last_value = null;
  }

  updateScreen();  
}

// Display result in screen results
function updateScreen() {
  console.log('Screen result updated');

  // Force result to be an float (to remove first 0)
  result = parseFloat(result);

  // Update dev#screen with result
  document.getElementById('screen').innerHTML = result;
}

// Helper: display current values for debug
function debugCalculette() {
  console.log('Current result is : ' + result);
  console.log('Current last_value is : ' + last_value);
  console.log('Current operation is : ' + current_operator);
}
