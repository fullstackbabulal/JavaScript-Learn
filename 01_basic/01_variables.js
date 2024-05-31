const accountId = 58463846;
let accountEmail = "fullstack.babulal@gmail.com";
var accountPassword = "8579415568@FSBgc";
accountCity = "Malda";

/* You need to remember to declare the 'variable' later, after you have initialized it. This means that you must give a variable a value before using it in your code. If you try to use a variable before giving it a value, it will be undefined. */

let accountState;

/* Remember that you cannot change or update variables that are declared with const. */

//accountId = 2;


accountEmail = "flash@python.com";


accountPassword = "Astring@154";


accountCity = "Testy City";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* I prefer not to use "var" due to issues with block scope and functional scope. */