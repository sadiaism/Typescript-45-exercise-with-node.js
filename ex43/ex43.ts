//make an Array
let magician_name = ["Rayyan","Sufiyan","Zamin"];

// function to print each magician name
function show_magician(magician:string[]){
    magician.forEach(name => console.log(name))
}
// make great magician
function make_great(magician:string[]){
    return magician.map(name =>`The great ${name}`)
}
// make a copy of original array
let copy_magician_name = magician_name.slice()

//copy array added the great
let copy_great_magician = make_great(copy_magician_name);
//calll origina and copy array

//original
show_magician(magician_name);
//copy
show_magician(copy_great_magician);