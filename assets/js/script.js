import Calculator from './Calculator.js';
'use strict'
const powerButton = document.querySelector('[data-power]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton= document.querySelector('[data-delete]');
const numbersButtons = document.querySelectorAll('[data-number]');
const allclearButton = document.querySelector('[data-all-clear]');
const history = document.querySelector('[data-history-container]');
const operationButtons = document.querySelectorAll('[data-operator]');
const dataContainer = document.querySelector('[data-result-date-container]');
const currentOperandText = document.querySelector('[data-current-operation]');
const previousOperandText = document.querySelector('[data-previous-operation]');
const calculator = new Calculator();

console.log (calculator); 


