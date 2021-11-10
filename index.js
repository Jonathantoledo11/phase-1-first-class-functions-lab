// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
let newArray = ['Sally', 'Bob'];
let newArray2 = ['Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    console.log(drivers);
    console.log(newArray);
    return newArray;
}
console.log(returnFirstTwoDrivers(newArray));


function returnLastTwoDrivers(drivers) {
    console.log(drivers);
    console.log(newArray2);
    return newArray2;
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (fare) { return num * fare };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers) {
    console.log(drivers);
    console.log(newArray);
    console.log(newArray2);
    return newArray, newArray2;
}
 
console.log(selectDifferentDrivers(returnFirstTwoDrivers));
console.log(selectDifferentDrivers(returnLastTwoDrivers));