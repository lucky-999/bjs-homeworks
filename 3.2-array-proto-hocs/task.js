"use strict"

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


function compareArrays(arr1, arr2) {
  return ((arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]));
}


function memorize(fn, limit) {
  return function (...args) {
    const memory = [];
    const find = memory.find((element) => compareArrays(element.args, args));
    if (find) {
      return find.result;
    }
    memory.unshift({args: args, result: fn(...args)});
    if (memory.length > limit) {
      memory.pop();
    }
    return memory[0].result;
  }
}  