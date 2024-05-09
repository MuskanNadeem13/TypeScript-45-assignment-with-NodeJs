// Creating a Guest List Array
var guestList = ["Muskan", "Huzam", "Hunaid", "Faham"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty han");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Aleena");
// Meesage Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner .");
// Adding a new guest at ending index of array
guestList.unshift("Wareesha");
// Adding a new guest ending index of array
guestList.push("Nimra");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Addiing a new guest to middle ondex of array
guestList.splice(middleIndex, 0, "Nimra");
// print Message of Updated List
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one  with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
