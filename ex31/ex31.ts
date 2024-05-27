let userNames = ["Osama","Moiz","Taha","Admin","Mazin"];

userNames = []


 //empty array
if(userNames.length === 0){
    console.log("array is empty ,We need to find some users")
}else{
//for each loop 
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
      console.log(`hello ${oneUser},would you like to see a status reprt?`)
    }else{
      console.log(`hello ${oneUser}, thank you for logging in again?`)
    }
  })}
