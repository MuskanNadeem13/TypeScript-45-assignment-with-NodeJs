// Creating a function with parameters which return a values in string 
function city_Country(city: string, country: string) : string{
    return `${city}, ${country}`;
}

// Calling a function and print the returned value

console.log(city_Country("Karachi", "Pakistan"));

console.log(city_Country("Tokyo", "Japan"));

console.log(city_Country("Berlin", "Germany"));


