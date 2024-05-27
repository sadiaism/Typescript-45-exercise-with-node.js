// using rest parameter
function make_sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwitch with the following item");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("Enjoy sandwitches");
}
//call function
make_sandwitch("chicken", "cheese");
make_sandwitch("bread", "oil");
make_sandwitch("egg", "butter");
