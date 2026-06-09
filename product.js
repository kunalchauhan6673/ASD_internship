let products = [
    { name: "Laptop", price: 65000, quality: "Good" },
    { name: "Mouse", price: 800, quality: "Low" },
    { name: "Keyboard", price: 2500, quality: "Low" },
    { name: "Mobile", price: 35000, quality: "Good" },
    { name: "TV", price: 55000, quality: "Good" }
];

// 1. Search Product by Name
console.log("1. Search Product by Name");
let searchName = "Laptop";

for(let i = 0; i < products.length; i++){
    if(products[i].name === searchName){
        console.log(products[i]);
    }
}

// 2. Search Product by Price
console.log("\n2. Search Product by Price");
let searchPrice = 35000;

for(let i = 0; i < products.length; i++){
    if(products[i].price === searchPrice){
        console.log(products[i]);
    }
}

// 3. Products Above ₹5000
console.log("\n3. Products Above ₹5000");

for(let i = 0; i < products.length; i++){
    if(products[i].price > 5000){
        console.log(products[i]);
    }
}

// 4. Products Below ₹5000
console.log("\n4. Products Below ₹5000");

for(let i = 0; i < products.length; i++){
    if(products[i].price < 5000){
        console.log(products[i]);
    }
}

// 5. Count Total Products
console.log("\n5. Total Products");
console.log(products.length);

// 6. Most Expensive Product
console.log("\n6. Most Expensive Product");

let max = products[0];

for(let i = 1; i < products.length; i++){
    if(products[i].price > max.price){
        max = products[i];
    }
}

console.log(max);

// 7. Cheapest Product
console.log("\n7. Cheapest Product");

let min = products[0];

for(let i = 1; i < products.length; i++){
    if(products[i].price < min.price){
        min = products[i];
    }
}

console.log(min);
