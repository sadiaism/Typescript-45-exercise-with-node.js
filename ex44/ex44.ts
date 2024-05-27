// using rest parameter
function make_sandwitch(...items:string[]){
    console.log("Making sandwitch with the following item")

    items.forEach(singleitem => console.log(singleitem));

    console.log("Enjoy sandwitches")
}

//call function
make_sandwitch("chicken","cheese");
make_sandwitch("bread","oil");
make_sandwitch("egg","butter");