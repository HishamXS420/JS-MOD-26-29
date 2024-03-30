 function ticketPrice(ticket){
    let sum = 0;
    if(ticket < 100){
        sum = ticket*100;
    }
    else if(ticket >= 100 && ticket < 200){
        sum = 100*100 + (ticket-100)*90;
    }
    else if(ticket >= 200)
    {
        sum = 100*100 + 100*90 + (ticket-200)*70;
    }



    return sum;
 }

 const ticketAmount = ticketPrice(250);
 console.log('Total ticket price : ',ticketAmount);