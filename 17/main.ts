// Creating a Guest List Array
let guestList = ["Muskan", "Huzam", "Hunaid", "Faham"];

// Making variable for those guest who cant come
let dontCome = guestList [0];

// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Aleena");

// Meesage Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner .");

// Adding a new guest at ending index of array
guestList .unshift("Wareesha");

// Adding a new guest ending index of array
guestList.push("Nimra");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Addiing a new guest to middle ondex of array
guestList.splice(middleIndex, 0, "Nimra")

// print Message of Updated List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one by one  with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Inform that only two guest  can beinvited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");

// Using while.loop to remove guest from the array until only two names remain
while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest} I cant invite you to dinner`);
}       
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing list two Guest from the list 
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

