let guestlist = ["Asfa","Asiya","Adeena"];
let absent = guestlist[0];
console.log(absent,"not come");

guestlist.splice(0, 1, "Misbah");
console.log("good news ! We have found a bigger dinner table")
//add one guest on beginning
guestlist.unshift("Nimra");
//add one guest on ending
guestlist.push("Ayesha");
//add one guest on middle
let middleIndex: number = Math.floor(guestlist.length /2);

guestlist.splice(middleIndex,0,"Dua");

//print
console.log("Updatedlist of our guest");
console.log(`${guestlist[0]}, "Today is the dinner party at my home so,you all invited"`);
console.log(`${guestlist[1]}, "Today is the dinner party at my home so,you all invited"`);
console.log(`${guestlist[2]}, "Today is the dinner party at my home so,you all invited"`);
console.log(`${guestlist[3]}, "Today is the dinner party at my home so,you all invited"`);
console.log(`${guestlist[4]}, "Today is the dinner party at my home so,you all invited"`);
console.log(`${guestlist[5]}, "Today is the dinner party at my home so,you all invited"`);

//invite two guest for dinner
//01
 console.log("The new dinner table wont arrive ,so I can invite only two guest to dinner with me");

//02
while(guestlist.length > 2){
    let removeguest = guestlist.pop();
    console.log(`Sorry,${removeguest} "I cannot invite you to dinner"`);
}
//03
 console.log("Invitation to the last two guests");

 console.log(`luckily ${guestlist[0]},"You still invited on dinner"`);
 console.log(`luckily ${guestlist[1]},"You still invited on dinner"`);

 //o4
 guestlist.pop();
 guestlist.pop();

 console.log("Empty list:",guestlist);
