document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-4-button-1').addEventListener('click', function() {
        const formatString = function () {
            const string = prompt('Enter your massage(max 40 symbols)')
            const arr = string.split("");
            if (arr.length > 40) {
                arr.splice(40, Infinity, '.','.','.')
                return arr.join('')
            }
            else return arr.join('')
        };
        alert(formatString());
    });
    document.getElementById('task-4-button-2').addEventListener('click', function() {
        const formatString = function (string) {
            const arr = string.split("");
            if (arr.length > 40) {
                arr.splice(40, Infinity, '.','.','.')
                return arr.join('')
            }
            else return arr.join('')
        };
        console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    });
    document.getElementById('task-4-button-3').addEventListener('click', function() {
        const formatString = function (string) {
            const arr = string.split("");
            if (arr.length > 40) {
                arr.splice(40, Infinity, '.','.','.')
                return arr.join('')
            }
            else return arr.join('')
        };
        console.log(formatString('Curabitur ligula sapien.'));
    });
    document.getElementById('task-4-button-4').addEventListener('click', function() {
        const formatString = function (string) {
            const arr = string.split("");
            if (arr.length > 40) {
                arr.splice(40, Infinity, '.','.','.')
                return arr.join('')
            }
            else return arr.join('')
        };
        console.log(
            formatString(
                'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
            ),
        );
    });
});