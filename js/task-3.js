document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-3-button-1').addEventListener('click', function() {
        const findLongestWord = function () {
            let string = prompt('Find a longest word script')
            const arr = string.split(" ");
            let longestWord = arr[0];

            for (let i = 0; i < arr.length; i += 1) {
                if (longestWord.length < arr[i].length) {
                    longestWord = arr[i];
                }
            }

            return longestWord;
        };
        alert(findLongestWord());
    });
    document.getElementById('task-3-button-2').addEventListener('click', function() {
        const findLongestWord = function (string) {
            const arr = string.split(" ");
            let longestWord = arr[0]

            for (let i = 0; i< arr.length; i += 1) {
                if (longestWord.length < arr[i].length) {
                    longestWord = arr[i];
                }
            }

            return longestWord;
        };
        alert(findLongestWord('Google do a roll')); // 'Google'
    });
    document.getElementById('task-3-button-3').addEventListener('click', function() {
        const findLongestWord = function (string) {
            const arr = string.split(" ");
            let longestWord = arr[0];

            for (let i = 0; i < arr.length; i += 1) {
                if (longestWord.length < arr[i].length) {
                    longestWord = arr[i];
                }
            }

            return longestWord;
        };
        alert(findLongestWord('May the force be with you')); // 'force'
    });
});