'use strict'

function getResult(a,b,c){
    let discriminant = (b ** 2) - (4 * a * c);
    let x = [];
    if (discriminant === 0) {
        x = [-b / (2 * a)];
    } else if (discriminant > 0) {
        x.push((-b + (Math.sqrt(discriminant))) / (2 * a));
        x.push((-b - (Math.sqrt(discriminant))) / (2 * a));  
    }
    return x;
}

function getAverageMark(marks){
    let averageMark;
    let sum = 0;
    if (marks.length === 0) {
        averageMark = 0;
    } else {
        if (marks.length > 5) {
            marks = marks.slice(0, 5);
            alert(`очень много оценок\nв расчет пойдут только ${marks}`);
        }
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        averageMark = sum / marks.length;
    }
    return averageMark;
}

function askDrink(name, dateOfBirthday){
    let date = new Date(dateOfBirthday).getUTCFullYear();
    let today = new Date().getUTCFullYear();
    let result;
    if ((today - date) >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}