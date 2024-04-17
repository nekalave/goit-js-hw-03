document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-7-button').addEventListener('click', function () {

        let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
        let login = prompt('Enter login');

        const isLoginValid = function (login) {
            return login.length >= 4 && login.length <= 16;
        };

        const isLoginUnique = function (login, logins) {
            return !logins.map(item => item.toLowerCase() ).includes(login.toLowerCase());
        };

        const addLogin = function (login, logins) {
            if (login === null) {
                alert('Canceled by user')
            }
            else if (isLoginUnique(login, logins) && isLoginValid(login)) {
                logins.push(login)
                alert('Login successfully added!')
            }
            else if (!isLoginUnique(login, logins)) {
                alert('This login already used')
            }
            else if (!isLoginValid(login)) {
                alert('Error! The login must be between 4 and 16 characters long ')
            }
        };
        addLogin(login, logins);
    });
});