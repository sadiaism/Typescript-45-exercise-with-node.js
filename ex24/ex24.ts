let car ="car";
let ten = 10;
let twenty = 20;
let fifty = 50;




//no1

//equality
console.log("car is equal to car?");
console.log(car == "car");
//inequality
console.log("car is not equal to car?");
console.log(car != "car");

//no2

//to lowercase equality
console.log("In Lower case function, car is equal to car?");
console.log(car.toLowerCase() == "car");
//to lowercase inequality
console.log("In lower case function car is not equal to car?");
console.log(car.toLowerCase() != "car");

//no3
//Numerical tests
//equality and unequality
console.log("ten is not equal to 20?");
console.log(ten  != twenty);

console.log("ten is equal to twenty?");
console.log(ten == twenty);

//greater than and less than
console.log("twenty is greater than ten?");
console.log(20 > 10);

console.log("twenty is less than ten?");
console.log(20 < 10);

//greater or less than and equal to
console.log("twenty is greater than or equal to ten?");
console.log(20 >= 10);

console.log("twenty is less than or equal to ten?");
console.log(20 <= 10);

//n04
//And && operators
console.log("ten is equal to ten and fifty is greater than ten?");
console.log(10 == 10 && 50 > 10);

console.log("twenty is not equal to fifty and twenty is less than ten?");
console.log(twenty != fifty && 20 < 10);

//OR || operator
console.log("twenty is greater than fifty OR ten is equal to ten?");
console.log(20 > 50 || 10 ==10);

console.log("twenty is greater than twenty OR ten is not equal to ten?");
console.log(20 > 50 ||10 != 10);

//Item is include in array
let vegetables: string[] = ["potato","onion","tomato","garlic"];

function isExistInList<T>(item: string, list: string[]): boolean {
     return list.includes(item);
}
console.log(isExistInList<string>("lady finger",vegetables));
















