/* 
За допомогою prompt запитати “ім'я користувача”.
За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const inputUserName = prompt('Enter your name');

alert(
    `Hello, ${(inputUserName === null || !inputUserName.trim() || !isNaN(inputUserName)) ? '[userName]' : inputUserName}! How are you?`
);
