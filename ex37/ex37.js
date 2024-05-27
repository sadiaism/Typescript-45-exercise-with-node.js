//make default message
function make_Shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "I love typescript"; }
    console.log("creating a ".concat(size, " size shirt ").concat(printmessage, " print on shirt"));
}
//call the function
make_Shirt();
//call the function with default size
make_Shirt("medium");
//call the function with default size and message
make_Shirt("small", "I love python");
