// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.


let message;
let inputAnswer = prompt('Введите пароль, пожалуйста, мой Белый Господин');
const passWord = 'ADMIN_PASSWORD'
console.log(inputAnswer);



if (inputAnswer === null) {
    message = 'Отменено пользователем!'
    alert(message)
} else if (passWord === inputAnswer ) {
    message = 'Добро пожаловать!'
    alert(message)
}  else   {
    message = 'Доступ запрещен, неверный пароль!'
    alert(message)
} 