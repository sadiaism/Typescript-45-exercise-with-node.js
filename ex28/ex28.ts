let person_age = 23;

if(person_age < 2 ){
    console.log("the person is a baby");
}else if(person_age >= 2 && person_age < 4 ){
    console.log("the person is a toddler")
}else if(person_age >= 4 && person_age < 13){
    console.log("the person is kid")
}else if(person_age >= 13 && person_age < 20){
    console.log("the person is teenager")
}else if(person_age >= 20 && person_age < 65){
    console.log("the person is adult")
}else if(person_age === 65){
    console.log("the person is elder")
}