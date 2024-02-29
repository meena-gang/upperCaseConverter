const upperCaseConverter = (str) => str.toLowerCase();

console.log(upperCaseConverter("MEENA"));

const arr = ["MA","SA","I","SCH","OOL"];
const convertedArray = arr.map((el) => upperCaseConverter(el));
console.log(convertedArray);