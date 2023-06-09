let numeros=[5,8,2,3,4,51,10,25]

const multiplicacao = (multi)=>{
    return multi*5;
}

const metade =(met)=>{
    return (met/2).toFixed(2)
}

const multiplicaçãoCinco = numeros.map(multiplicacao);
const metadeNumeros = numeros.map(metade);
//const multiplicaçãoCinco = numeros.map(num=>num*5);


console.log(multiplicaçãoCinco);
console.log(metadeNumeros);