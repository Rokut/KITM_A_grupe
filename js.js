// Roberta - pradzia

let counterOne = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('.numberOne');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (counterOne !== percentageNumberValue) {
        counterOne++;
        percentageNumber.innerHTML = `${counterOne}%`;
    }
}, 90);

let counterTwo = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('.numberTwo');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (counterTwo !== percentageNumberValue) {
        counterTwo++;
        percentageNumber.innerHTML = `${counterTwo}%`;
    }
}, 75);

let counterThree = 0;
setInterval(() => {
const percentageNumber = document.querySelector('.numberThree');
const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (counterThree !== percentageNumberValue) {
        counterThree++;
        percentageNumber.innerHTML = `${counterThree}%`;
         }
}, 70);

let counterFour = 0;
setInterval(() => {
const percentageNumber = document.querySelector('.numberFour');
const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (counterFour !== percentageNumberValue) {
        counterFour++;
        percentageNumber.innerHTML = `${counterFour}%`;
          }
},85);


// Roberta - pabaiga