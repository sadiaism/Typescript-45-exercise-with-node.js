//make an Array
let magician_name = ["Rayyan","Sufiyan","Zamin"];

// function to print each magician name
function show_magician(magician:string[]){
    magician.forEach(name => console.log(name))
}

function make_great(magician:string[]){
    return magician.map(name =>`The great ${name}`);

}
let great_magician = make_great(magician_name);
console.log(great_magician);