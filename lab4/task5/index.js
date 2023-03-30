let input = document.getElementById("input");

function append(value) {
	input.value += value;
}

function clearInput() {
	input.value = "";
}

function calculate() {
	let result = eval(input.value);
	input.value = result;
}

function sqrt() {
	let value = parseFloat(input.value);
	if (value >= 0) {
		let result = Math.sqrt(value);
		input.value = result;
	} else {
		input.value = "Error";
	}
}

function power() {
	let values = input.value.split("^");
	if (values.length == 2) {
		let x = parseFloat(values[0]);
		let y = parseFloat(values[1]);
		let result = Math.pow(x, y);
		input.value = result;
	} else {
		input.value = "Error";
	}
}

function operator(operator) {
	input.value += operator;
}
