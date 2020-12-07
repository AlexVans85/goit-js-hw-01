// Пользователь может оформить доставку товара к себе в страну, 
// указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, 
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов



const inputCountryDelivery = prompt('Введите страну доставки');

let message;
let price;
let country;

if (inputCountryDelivery === null) {

    message = `Отменено Пользователем  :((((  `;
    alert(message);
} else {
const inputCountryDeliveryLowCase = inputCountryDelivery.toLocaleLowerCase();
switch (inputCountryDeliveryLowCase) {
    
     case 'китай':
        country = 'Китай';
        price = 100;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        alert(message);
        break;

    
    case 'чили':
        country = 'Чили';
        price = 250;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        alert(message);
        break;

    case 'австралия':
        country = 'Австралия';
        price = 170;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        alert(message);
        break;

    case 'индия':
        country = 'Индия';
        price = 80;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        alert(message);
        break;

     case 'ямайка':
        country = 'Ямайка';
        price = 120;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        alert(message);
        break;
        
    default:
       message = 'В вашей стране доставка не доступна';
       alert(message)
}
}