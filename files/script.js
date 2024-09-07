document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    const operators = ['+', '-', '*', '/'];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DE') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
                    display.value = display.value.slice(0, -1) + value;
                } else {
                    display.value += value;
                }
            }
        });
    });
});