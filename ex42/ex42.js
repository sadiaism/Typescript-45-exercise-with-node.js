//make an Array
var magician_name = ["Rayyan", "Sufiyan", "Zamin"];
// function to print each magician name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
var great_magician = make_great(magician_name);
console.log(great_magician);
