'use strict'

class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(timeStart, fn, id) {
        if (id === undefined) {
            throw new Error('Ошибка! Не передан id');
        }
        if (this.alarmCollection.find(element => element.id === id)) {
            console.error('id уже существует!');
            return;
        }
        this.alarmCollection.push({id: id, time: timeStart, callback: fn});
    }

    removeClock(id) {
        const removeClock = this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id), 1);
        return removeClock;
    }

    getCurrentFormattedTime() {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        if ((minutes >= 0 && minutes < 10) && (hours >= 0 && hours < 10)) {
            return `0${hours}:0${minutes}`;
        } else if (minutes >= 0 && minutes < 10) {
            return `${hours}:0${minutes}`;
        } else if (hours >= 0 && hours < 10) {
            return `0${hours}:${minutes}`;
        } else {
            return `${hours}:${minutes}`;
        }
    }

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)));
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`ID: ${element.id}, время: ${element.time}`));
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("09:00", () => console.log("Пора вставать"), 1);
    phoneAlarm.addClock("09:01", () => { console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2) }, 2);
    phoneAlarm.addClock("09:01", () => console.log("Иди умываться"));
    phoneAlarm.addClock("09:02", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
    phoneAlarm.printAlarms();
    phoneAlarm.start(); 
}