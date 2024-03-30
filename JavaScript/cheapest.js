const phones = [
    {name : 'Samsung', camera: 64, storage: '128gb', price: 35000, color:'silver'},
    {name : 'Xiaomi', camera: 108, storage: '256gb', price: 45000, color:'black'},
    {name : 'Iphone', camera: 48, storage: '128gb', price: 85000, color:'silver'},
    {name : 'Realme', camera: 64, storage: '256gb', price: 43000, color:'white'},
    {name : 'Walton', camera: 48, storage: '64gb', price: 14000, color:'silver'},
    {name : 'Oppo', camera: 64, storage: '64gb', price: 19000, color:'black'}
]; // Array Objects

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length ; i++)
    {
               const phone = phones[i];
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);