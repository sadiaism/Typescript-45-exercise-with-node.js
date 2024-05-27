var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//01
var Countries = ["saudiArabia", "Turkey", "Iran", "canada",];
//02
console.log("Original Order:", Countries);
//03
console.log("Alphabetical Order:", Countries.sort());
//04
console.log("still in original order:", Countries);
//05
console.log("Reverse Order:", __spreadArray([], Countries, true).reverse());
//06
console.log("still in original order:", Countries);
//07
console.log("Original array reversed:", Countries.reverse());
//08
console.log("Back to Original order:", Countries.reverse());
//09
console.log("Sorted in Alphabetical Order:", Countries.sort());
//10
console.log("Original Order reversed:", Countries.reverse());
