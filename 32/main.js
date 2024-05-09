// Array of Current Users
var current_users = ["Alisha", "farah", "Zunair", "Taimoor", "Hunaid"];
// Array of New Users
var new_users = ["Ali", "Fatima", "", "Zunair", "Shifa", "Alisha"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for user_name already exist and save in our_condition variable
    var our_Condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using If_Else statments
    if (our_Condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
