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

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i ++) {
        sum += marks[i]
    }
    return sum / marks.length;
}

function getAverageScore(data) {
    for (let prop in data) {
      let object = {
        [prop]: getAverageMark(data [prop])
        }
      console.log(object);
      // console.log(`${prop}: ${getAverageMark(data [prop])}`);
      
    }
}

getAverageScore(data)

// let averageMarks = Object.values(object); 
// object.average = getAverageMark(averagemarks);