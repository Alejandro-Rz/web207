function resta(n1, n2){
    return parseInt(n1)-parseInt(n2);
    
    }
    
    let numero1 = prompt ("Numero 1");
    
    let numero2 = prompt ("Numero 2");

    console.log(`La resta es: ${resta(numero1, numero2)}`);

    let opcion = parseInt( prompt(`)
    Operacion:
    1-. Resta  
    `));
switch(opcion){
    case 1:
            console.log(`La Resta es: ${resta(numero1, numero2)}`);
        break;
    default:
            console.log("Error");
        break;

}