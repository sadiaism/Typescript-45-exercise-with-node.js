//make an Array
var magician_name = ["Rayyan", "Sufiyan", "Zamin"];
// function to print each magician name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//call the function
show_magician(magician_name);
