"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        alert ('в первом поле нужно написать\nпроцентную стаавку числом!');
        } else if (isNaN(contribution)) {
            alert ('во втором поле нужно написать\nначальный взнос числом!');
        } else if (isNaN(amount)) {
            alert ('в третьем поле нужно написать\nобщая стоимость числом!');
        } else if (isNaN(date)) {
            alert ('надо еще ввести дату')
        }
        else {
            let body = amount - contribution;
            let monthToPay;
            monthToPay = (date.getFullYear() - new Date().getFullYear()) * 12;
            monthToPay -= new Date().getMonth();
            monthToPay += date.getMonth();
            monthToPay < 0 ? monthToPay = 0 : monthToPay;
            console.log(monthToPay);
            
            if (monthToPay === 0) {
                alert ('зачем тебе ипотека, если ты собираешься заплатить в течении месяца???')
                return amount;
            } else {
                let mounthlyAmount = (body * ((percent / 100 / 12) + (percent / 100 / 12) / ((Math.pow((1 + (percent / 100 / 12)), monthToPay)) - 1)))
            console.log(mounthlyAmount);

            let totalAmount = (mounthlyAmount * monthToPay).toFixed(2);
            console.log(totalAmount);
            return totalAmount;
            }
            
            
        }
}

function getGreeting(name) {
    if (!name || name == "undefined") {
        name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}.`
    
    console.log(greeting);
    return greeting;
}