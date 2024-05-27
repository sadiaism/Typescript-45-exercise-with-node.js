//01
let Countries:string[] =["saudiArabia","Turkey","Iran","canada",];
//02
console.log("Original Order:",Countries);
//03
console.log("Alphabetical Order:",[...Countries].sort());
//04
console.log("still in original order:" ,Countries);
//05
console.log("Reverse Order:",[...Countries].reverse())
//06
console.log("still in original order:",Countries);
//07
console.log("Original array reversed:",Countries.reverse());
//08
console.log("Back to Original order:",Countries.reverse());
//09
console.log("Sorted in Alphabetical Order:" ,Countries.sort());
//10
console.log("Original Order reversed:", Countries.reverse());