const display = document.getElementById('display');

function ajouter_numero(number) {
    display.value += number;
}

function ajouter_operation(operator) {
    const dernier_caractere = display.value.slice(-1);
    if (!['+', '-', '*', '/', '%', '**'].includes(dernier_caractere)) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteDernierNombre() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erreur';
    }
}

function square() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (e) {
        display.value = 'Erreur';
    }
}

function cube() {
    try {
        display.value = Math.pow(eval(display.value), 3);
    } catch (e) {
        display.value = 'Erreur';
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Erreur';
    }
}
