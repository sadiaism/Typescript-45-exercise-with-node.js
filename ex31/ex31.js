var userNames = ["Osama", "Moiz", "Taha", "Admin", "Mazin"];
userNames = [];
//empty array
if (userNames.length === 0) {
    console.log("array is empty ,We need to find some users");
}
else {
    //for each loop 
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ",would you like to see a status reprt?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again?"));
        }
    });
}
