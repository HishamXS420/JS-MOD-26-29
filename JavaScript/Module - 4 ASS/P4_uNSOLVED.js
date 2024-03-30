const address1 = [
    {street: 10, house: '15A', society:"Earth Perfect"},
    {street: 10, society:"Earth Perfect"},
    {street: 10},
   
];


function findAddress(obj){
    let Street ;
    let House ;
    let Society ;
    for(let i = 0; i<obj.length ; i++){
        const object = obj[i];
        if(object.street != null){
  
            Street = object.street;
        }
        else{
            Street = '_';
        }
        if(object.house != null){
           
            House = object.house;
        }
        else{
            House = '_';
        }
        if(object.society != null){
           
            Society = object.society;
        }
        
        else{
            Society = '_';
        }
    }

    let output = console.log(Street + ',' + House + ',' + Society);
    return output;
}

const result = findAddress(address3);
console.log(result);
