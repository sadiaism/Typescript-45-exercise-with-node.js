var userNames = ["Osama", "Moiz", "Taha", "Admin", "Mazin"];
//for each loop 
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello ".concat(oneUser, ",would you like to see a status reprt?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again?"));
    }
});
