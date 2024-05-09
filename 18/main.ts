// Making a Array of Countries and print its Orginal Order
let countriesTovisit: String[] = ["China","Denmark","Brazil","Argentina"];
console.log("Orginal Order", countriesTovisit);

// Print the Array is Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order;", [...countriesTovisit].sort());

// Show that the array is still in its Orginal order
console.log("still in Orginal Order:", countriesTovisit);

// Print the Array is Reversed Order without modifying the Actual Array List
console.log("Reverse Order", [...countriesTovisit].reverse());

// Show that the array is still in its Orginal Order
console.log("still in Orginal Order:", countriesTovisit);

// we have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed", countriesTovisit.reverse());

// Print the array to show that its orginal order
console.log("Back to Orginal Order;", countriesTovisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Started in Alphabetical Order:", countriesTovisit.sort());

// we have changed again the Orginal Array Order Now in reverse order again
console.log("Orginal Array Reversed Again", countriesTovisit.reverse());
