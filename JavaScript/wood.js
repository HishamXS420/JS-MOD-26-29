function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood ;
    const tableWood = tableQuantity * perTableWood ;
    const bedWood = bedQuantity * perBedWood ;

    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood ;
}

const totalWood = woodCalculator(3,3,5);
console.log('total wood required: ', totalWood);