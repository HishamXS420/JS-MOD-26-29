function miles2km(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const BMW_km = 200 ;
const BMW_mil = miles2km(BMW_km);
console.log('BMW top speed',BMW_mil);