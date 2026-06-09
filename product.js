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

