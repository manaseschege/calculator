const input = document.querySelector("input");

function calculate(number) {
  input.value = input.value + number;
}

function result() {
  
    input.value = eval(input.value);
 
}

function clears() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}