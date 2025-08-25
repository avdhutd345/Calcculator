let display = document.getElementById("display");

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}


function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function power() {
  display.value += "**";
}

function sin() {
  display.value = Math.sin(eval(display.value) * Math.PI / 180); // degrees
}

function cos() {
  display.value = Math.cos(eval(display.value) * Math.PI / 180);
}

function tan() {
  display.value = Math.tan(eval(display.value) * Math.PI / 180);
}

function log() {
  display.value = Math.log10(eval(display.value));
}
