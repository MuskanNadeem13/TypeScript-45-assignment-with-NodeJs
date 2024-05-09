var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and print its Orginal Order
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order", countriesTovisit);
// Print the Array is Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order;", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in its Orginal order
console.log("still in Orginal Order:", countriesTovisit);
// Print the Array is Reversed Order without modifying the Actual Array List
console.log("Reverse Order", __spreadArray([], countriesTovisit, true).reverse());
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
