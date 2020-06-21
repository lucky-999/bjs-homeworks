//задание 1

String.prototype.isPalindrome = function(string) {
    let reverseString = this.toString().split('').reverse().join('');

    if (reverseString.toLowerCase() === string.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}


//задание 2

function getAverageMark(marks) {
    let sum = 0;
    for (let i =0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    let average = sum / marks.length;
    let roundedAverage = Math.round(average)
    
    return roundedAverage;
}

//задание 3

function checkBirthday(birthday) {
    let now = new Date().getTime();
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let averageMsYear = 31556952000;
    let age = diff / averageMsYear;

    let verdict
    if (age >= 18) {
        verdict = true;
    } else {
        verdict = false;
    }
    
    console.log(age);
 
    return verdict
}