//make default message
function make_Shirt(size:string = "large",printmessage:string = "I love typescript"){
    console.log(`creating a ${size} size shirt ${printmessage} print on shirt`)
}
//call the function
make_Shirt();

//call the function with medium size
make_Shirt("medium");

//call the function with small size and  another message
make_Shirt("small","I love python");
