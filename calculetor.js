let display = document.getElementById('display');

function toScreen(x) {
  if (x === 'c') {
    display.value = '';
  } else {
    display.value += x;
  }
}

function answer() {
  try {
    let x = display.value;
    let y = eval(x);
    display.value = y;
  } catch (err) {
    display.value = "Error";
  }
}

function power() {
  try {
    let x = eval(display.value);
    display.value = x * x;
  } catch {
    display.value = "Error";
  }
}

function percent() {
  try {
    let x = eval(display.value);
    display.value = x / 100;
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}
