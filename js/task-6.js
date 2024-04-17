document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-6-button').addEventListener('click', function () {

        let input;
        let numbers = [];
        let total = 0;
        do {
            input = prompt(`Enter a number to add it to the total sum of numbers. Press cancel to finish.`);
            if (input !== null) {
                let currentNumber = parseInt(input);
                if (/^\d+$/.test(input)) {
                    numbers.push(currentNumber);
                } else {
                    alert("Please enter a valid number!");
                }
            }
        } while (input !== null);
        for (let i = 0; i< numbers.length; i += 1) {
                total += numbers[i];
        } 
        alert(`Final total is ${total}`);
    });
});