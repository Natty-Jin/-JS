/* const player = {
    name: "Natty",
    age: 96,
};
player.name = "Nathaniel";
console.log(player);
player.sexy = " soon";
console.log(player); */

/* function plus(PAPA) {
    console.log(PAPA - 1);
}

plus(5, 1, 2, 3, 1, 5, 1, 2, 3);
 */
/* plus(5, 5);
plus(1.1242131, 55.22);
plus(1.231, 5);
 */

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    divide: function (a, b) {
        return a / b;
    },
    times: function (a, b) {
        return a * b;
    },
    power: function (a, b) {
        return a ** b;
    },
    minus: function (a, b) {
        return a - b;
    },
};


const plusResult = calculator.plus(6, 1); //7
const minusResult = calculator.minus(plusResult, 10); //-3
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);


// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return "hello";
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


// 소음 기준: 공지선거법 제 79조 10선 공개장소에 연설되던 소음기준은 없음.
// 79조 8항이 21년 1월 1일 신설됨. 2022년 4월부터 아직 