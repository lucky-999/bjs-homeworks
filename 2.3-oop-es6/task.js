"use strict"

// Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set stateCheck(number) {
        if (number < 0) {
            this._stateCheck = 0;
        } else if (number > 100) {
            this._stateCheck = 100;
        } else {
            this._stateCheck = number;
        }
    }
    
    get stateCheck() {
        this.state = _stateCheck;
    }
  }


//test

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
    super() {
      this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook  extends Book {
  super() {
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  super() {
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  super() {
    this.type = 'detective';
  }
}


//test
// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


// задание 2

class Library {
  constructor(name, books) {
  this.name = name;
  this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

   findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

giveBookByName(bookName) {
  for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          this.books.splice(i, 1);
        }
      }
      return null;
  }

}



// test
// const library = new Library("Библиотека имени Ленина");
// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



//задание 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  getName() {
    return this.name
  }

  addGrade(grade, subject) {
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    if (grade >= 1 && grade <= 5) {
      this.marks[subject].push(grade);
      return this.marks[subject].length;
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      return this.marks[subject].length;
    }
  } 

  getAverageBySubject(subject) {
    let sum = 0;
    let result = 0;
    if (this.marks[subject] && this.marks[subject].length) {
      // this.scores[subject].forEach((element) => (sum += element)); // короткая запись
      for (let i = 0; i < this.marks[subject].length; i++) {
        sum += this.marks[subject][i];
        result = sum / this.marks[subject].length;
      }
    }
    return result;
  }

  getTotalAverage() {
    let sum = 0;
    let count = 0;
  
    for (let prop in this.marks) {
      for (let i = 0; i < this.marks[prop].length; i++) {
        sum += this.marks[prop][i];
        count ++
      }
    }
    let result = 0;
    if (count > 0) {
      result = sum / count
    }
    
    // let result = count ? (sum / count) : 0; //короткая запись
    
    return result;
  }

}

// test
// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getTotalAverage()); // 3,75