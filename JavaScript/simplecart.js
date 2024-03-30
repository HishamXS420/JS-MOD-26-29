const shoppingCart = [
    { name : 'Shoe', price: 1200, quantity: 2},
    { name : 'Shirt', price: 2200, quantity: 3},
    { name : 'Pant', price: 1500, quantity: 4},
    { name : 'Belt', price: 700, quantity: 5},
    { name : 'Watch', price: 1500, quantity: 6},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0 ; i<products.length ; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;

        console.log(product);
        sum = sum + productTotal;
    }
       return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today : ',expense);


