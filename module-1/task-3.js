"use strict";

let message;
const ENTER_PASSWORD = 'Введите пароль'
const CANCEL_BY_USER = 'Отменено пользователем!'
const ADMIN_PASSWORD = 'jqueryismyjam'
const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!'


const userPassword = prompt(ENTER_PASSWORD, '')

switch(userPassword) {
case ADMIN_PASSWORD: message = ACCESS_IS_ALLOWED; break;
case null: message = CANCEL_BY_USER; break;
default: message = ACCESS_DENIED;
}

alert(message)



