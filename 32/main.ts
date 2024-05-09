// Array of Current Users
let current_users = ["Alisha", "farah", "Zunair", "Taimoor", "Hunaid"]

// Array of New Users
let new_users = ["Ali", "Fatima", "", "Zunair", "Shifa", "Alisha"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
  
    // Making a Condition for user_name already exist and save in our_condition variable
    let our_Condition  = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
    // Print Different messages using If_Else statments
    if(our_Condition){
       console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})