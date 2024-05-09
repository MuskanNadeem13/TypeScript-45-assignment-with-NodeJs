// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

// Function to make magicians great through .mapit will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry potter", "Aliyan", "Muskan"]

// Making a copy of Orginal array through .Slice.() function
let copy_magicians_names = magician_names.slice()

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

// Show both arrays Original and Copied

// Original 
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);
