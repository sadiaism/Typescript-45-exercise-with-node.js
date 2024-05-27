//make an Array
var magician_name = ["Rayyan", "Sufiyan", "Zamin"];
// function to print each magician name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// make great magician
function make_great(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
// make a copy of original array
var copy_magician_name = magician_name.slice();
//copy array added the great
var copy_great_magician = make_great(copy_magician_name);
//calll origina and copy array
//original
show_magician(magician_name);
//copy
show_magician(copy_great_magician);
