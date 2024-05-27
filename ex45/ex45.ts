//function of car object
function create_car(manufacturer,model,...options){
    //make an object
    let car ={
        manufacturer:manufacturer,
        model:model
    };

    options.forEach(option => {
        let[key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}


//call the function
let my_car = create_car("toyota","corolla","colour:black","sunroof:true");

console.log(my_car);