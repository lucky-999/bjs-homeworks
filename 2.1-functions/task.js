"use strict"

//задание 1

function getSolutions( a, b, c ) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return {
            D: d, 
            roots: []
        };
    } else if (d === 0) {
        let x1 = -b / 2 * a;
        return {
            D: d, 
            roots: [x1]
        }
    } else {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        return {
            D: d, 
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length == 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}


//задание 2

function getAverageScore(data) {
    let object = {};
    for (let prop in data) {
        object [prop] = getAverageMark(data [prop]);
    }
    
    let overageMarks = [];
    for (let prop in object) {
      overageMarks.push(object [prop]);
    }

    object.average = getAverageMark(overageMarks);


    return object;
}

function getAverageMark(marks) {
    let average = 0;
    let sum = 0;
    if (marks && marks.length) {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
            average = sum / marks.length;
        }
    }
    return average;
}


//задание 3

function  getPersonData(secretData) {
    let object = {} 
    object.firstName = getDecodedValue(secretData.aaa);
    object.lastName = getDecodedValue(secretData.bbb);
    return object;
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return "Родриго";
    } else if (secret === 1) {
        return "Эмильо";
    }
}