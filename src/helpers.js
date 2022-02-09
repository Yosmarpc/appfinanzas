  //const money = 10000;
    const currency = function(number){
    return new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP', minimumFractionDigits: 0}).format(number);
   };

   export  { currency };