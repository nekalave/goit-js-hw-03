document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-1-button-1').addEventListener('click', function () {
        const user = {
            name: 'Mango',
            age: 20,
            hobby: 'html',
            premium: true,
        };
        const updateUserInfo = function (user) {
            user.hobby = 'skydiving';
            user.premium = false;
            user.mood = 'happy';
            const keys = Object.keys(user)
            for (const key of keys) {
                alert(key)
                alert(user[key])
            }
        };
        updateUserInfo(user);
    });
});