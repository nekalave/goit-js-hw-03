document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-2-button-1').addEventListener('click', function () {
        const calculateEngravingPrice = function (message, pricePerWord) {
            const arr = message.split(" ");
            const arrLength = arr.length
            return pricePerWord * arrLength;
        };
        alert(
            calculateEngravingPrice(
                'Proin sociis natoque et magnis parturient montes mus', 10,
            ),
        );
    });
    document.getElementById('task-2-button-2').addEventListener('click', function () {
        const calculateEngravingPrice = function (message, pricePerWord) {
            const arr = message.split(" ");
            const arrLength = arr.length
            return pricePerWord * arrLength;
        };
        alert(
            calculateEngravingPrice(
                'Proin sociis natoque et magnis parturient montes mus', 20,
            ),
        );
    });
    document.getElementById('task-2-button-3').addEventListener('click', function () {

        const calculateEngravingPrice = function () {
            const pricePerWord = 40;
            let customMessage = prompt(`Cost per word = ${pricePerWord}`);
            const arr = customMessage.split(" ");
            const arrLength = arr.length
            return pricePerWord * arrLength;
        };
        alert(
            calculateEngravingPrice(),
        );
    });
    document.getElementById('task-2-button-4').addEventListener('click', function () {
        const calculateEngravingPrice = function (message, pricePerWord) {
            const arr = message.split(" ");
            const arrLength = arr.length
            return pricePerWord * arrLength;
        };
        alert(
            calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
        );
    });
});