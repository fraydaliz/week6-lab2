"use strict";

const products = [
  {
    name: "Iphone 16 Pro Max",
    category: "Electronics",
    price: "$1100",
    inStock: true,
    src: "https://www.letemsvetemapplem.eu/wp-content/uploads/2024/01/iphone-16-pro-3.jpeg"
  },
  { name: "Necklace",
     category: "Jewelry", 
     price: "$100", 
     inStock: true,
     src:"https://i.pinimg.com/originals/8a/45/b1/8a45b1f06e34703f04871d7d9aff1aeb.jpg"
     },
  { name: "Floral Dress", 
    category: "Clothing", 
    price: "$50", 
    inStock: false ,
    src: "https://i.pinimg.com/736x/04/c5/d1/04c5d1a70f849f7e13eea55af8e50135.jpg"
},
];

function render(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    let isStock = "";
    const product = someArray[i];
    if (product.inStock) {
      isStock = "In Stock";
    } else {
      isStock = "Not In Stock";
    }
    let card = `
      <div class="container text-center mt-5">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;" class="mt-5">
    <img src="${product.src}" alt="aventura group photo">
    <div class="card-body p-3 mb-0 bg-primary-subtle text-primary-emphasis">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.category}</p>
       <p class="card-text">${product.price}</p>
        <p class="card-text">${isStock}</p>
    </div>
  </div>
      </div>
     
      
    </div>
  </div>
      
      `;
    document.getElementById("main2").innerHTML += card;
  }
}
render(products);
