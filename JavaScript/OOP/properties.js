var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25,
}
 
// When you know the specific property name, use dot notation
var penCount = shoppingCart.pen;
console.log(shoppingCart);

// Alternative System 1
var penCount = shoppingCart['pen'];

var propertyName = 'books';
shoppingCart[propertyName] = 87;
console.log(shoppingCart);


// var propertyValue = shoppingCart[propertyName];
// console.log(propertyName,propertyValue);



// // Alternative System 2
// var properties = Object.keys(shoppingCart);
// var propertyValues = Object.values(shoppingCart);

// console.log(properties);
// console.log(propertyValues);

// shoppingCart.mouse = 15;

// shoppingCart['mouse'] = 43;
// console.log(shoppingCart);
