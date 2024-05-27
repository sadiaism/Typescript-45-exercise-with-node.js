let current_user = ["Osama","taha","Moiz","sADia","Anabia"];

let new_user =["Fatima","nabiha","Taha","hajra","Sadia"];

//loop through newuser names available or not

new_user.forEach(new_one_user => {

    let conditions = current_user.some(current_one_user =>current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //if else statement
    if(conditions){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
})