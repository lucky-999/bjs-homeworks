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
        return `${hours}:${minutes}`;
    }

    start(alarm) {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(this.alarmCollection.forEach(checkClock()));
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            delete this.timerId;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(console.log(`ID: ${element.id}, время: ${element.time}`));
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}