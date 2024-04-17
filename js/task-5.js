document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-5-button-1').addEventListener('click', function () {
        const checkForSpam = function () {
            let message = prompt('Enter your message')
            const newMessage = message.toLowerCase();
            if (newMessage.includes('spam') || newMessage.includes('sale')) {
                alert('This is spam!');
            } else {
                alert(message);
            }
        };
        checkForSpam()
    });
    document.getElementById('task-5-button-2').addEventListener('click', function () {
        const checkForSpam = function (message) {
            let check;
            const newMessage = message.toLowerCase();
            if (newMessage.includes('spam') || newMessage.includes('sale')) {
                check = 'true';
            } else {
                check = 'false';
            }
            return check;
        }
        console.log(checkForSpam('JavaScript weekly newsletter'));
    });
    document.getElementById('task-5-button-3').addEventListener('click', function () {
        const checkForSpam = function (message) {
            let check;
            const newMessage = message.toLowerCase();
            if (newMessage.includes('spam') || newMessage.includes('sale')) {
                check = 'true';
            } else {
                check = 'false';
            }
            return check;
        }
        console.log(checkForSpam('Get best sale offers now!'));
    });
    document.getElementById('task-5-button-4').addEventListener('click', function () {
        const checkForSpam = function (message) {
            let check;
            const newMessage = message.toLowerCase();
            if (newMessage.includes('spam') || newMessage.includes('sale')) {
                check = 'true';
            } else {
                check = 'false';
            }
            return check;
        }
        console.log(checkForSpam('[SPAM] How to earn fast money?'));
    });
});