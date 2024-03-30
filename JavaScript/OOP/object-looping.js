

var friendsAge = [12,45,56,23,21];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 56,
    robi: 23,
    kazi: 21
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25,
    shoes:2,
    bottle: 1
}

// // 1st Process
 const keys = Object.keys(shoppingCart);
// // console.log(keys);

 const values = Object.values(shoppingCart);
// // console.log(values);

const entries = Object.entries(shoppingCart);
console.log(entries);
// //Alternative & efficient process
 for(var i = 0; i < keys.length ; i++)
 {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
   // console.log(propertyName, propertyValue)
 }

// for in loop
// for(var propertyName in shoppingCart)
// {
//     const value = shoppingCart[propertyName];
//     console.log(propertyName, value);
// }
