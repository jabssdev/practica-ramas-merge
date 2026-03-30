const screen = document.getElementById("pantalla");

const OPERATORS = ["+", "-", "*", "/"];

function addToScreen(value) {
	const current = screen.value;
	const lastCharacter = current.slice(-1);
	const isOperator = OPERATORS.includes(value);
	const lastIsOperator = OPERATORS.includes(lastCharacter);

	// No permitir operador al inicio, excepto para el signo negativo
	if (!current && isOperator && value !== "-") return;

	// Si se ingresa dos operadores consecutivos, reemplazar el anterior
	if (lastIsOperator && isOperator) {
		screen.value = current.slice(0, -1) + value;
		return;
	}

	// No permitir varios puntos en el mismo número
	if (value === ".") {
		const segments = current.split(/[+\-*/]/);
		const currentSegment = segments[segments.length - 1];
		if (currentSegment.includes(".")) return;
		if (!currentSegment) screen.value += "0";
	}

	screen.value += value;
}

function calculate() {
	const expression = screen.value;
	if (!expression) return;

	// Validar
	if (!/^[\d+\-*/.]+$/.test(expression)) {
		showError();
		return;
	}

	try {
		const result = new Function("return " + expression)();

		if (!Number.isFinite(result)) {
			showError("Cannot divide by zero");
			return;
		}

		screen.value = parseFloat(result.toFixed(10));
	} catch {
		showError();
	}
}

function clearScreen() {
	screen.value = "";
}

function deleteLastCharacter() {
	screen.value = screen.value.slice(0, -1);
}

function showError(message = "Error") {
	screen.value = message;
	setTimeout(clearScreen, 1500);
}
