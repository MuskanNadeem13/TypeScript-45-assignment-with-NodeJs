// lower case 
let personName: string ="Muskan Nadeem"
console.log("lowercase:", personName.toLowerCase());

// upper case 
console.log("uppercase:", personName.toLocaleUpperCase());

// Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));