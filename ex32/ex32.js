var current_user = ["Osama", "taha", "Moiz", "sADia", "Anabia"];
var new_user = ["Fatima", "nabiha", "Taha", "hajra", "Sadia"];
//loop through newuser names available or not
new_user.forEach(function (new_one_user) {
    var conditions = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //if else statement
    if (conditions) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
