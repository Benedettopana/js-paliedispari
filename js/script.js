const parola = prompt('Inserisci parola: ');
// palindro(parola);


if(palindroma(parola)){
  console.log(parola + " è una parola palindroma.");
} else {
  console.log(parola + " NON è una parola palindroma.");
}

// PARI O DISPARI
// VERIFICHE INSERIMENTO
verifica = true;
let pariDispari
do{
  pariDispari = prompt('Inserisci pari o dispari');
  if(pariDispari == 'pari' || pariDispari == 'dispari'){
    verifica = false;
  } 
}while(verifica)

verifica = true;
let prova;
let myN;
do{
  myN =parseInt(prompt('Inserisci un numero compreso tra 0 e 5:'));
  if(myN >= 0 || myN < 6){
    verifica = false;
  }
}while(verifica);

// VERIFICHE INSERIMENTO

const pcN = estrazione();
const somma = pcN + myN;
console.log(somma);
console.log('prova');
vincitore(somma, pariDispari);
console.log('prova2');




// *******************************
//            palindroma
// *******************************
// Definizione funzione
function palindroma(parola){
  for(let i = 0; i < parola.length / 2; i++){
    // Se un carattere non corrisponde al carattere nell'altra metà: NON palindroma
    if(parola[i] !== parola[parola.length - i - 1]){
      return false;
    }
  }
  // Parola è palindroma
  return true;
}
// *******************************
//          palindroma
// *******************************


// *******************************
//          Num random
// *******************************

function estrazione(){
  return Math.floor(Math.random() * (5 - 0 + 1) ) + 0;
}

// *******************************
//          Num random
// *******************************
// *******************************
//      Stabiliamo vincitore
// *******************************

function vincitore(somma, pariDispari){
  
  console.log(somma);

  if(somma % 2 === 0 && pariDispari === 'pari'){
      console.log('Vince il giocatore');
      alert('Vince il giocatore');
    } else if(somma % 2 !== 0 && pariDispari === 'dispari'){
      console.log('Vince il giocatore');
      alert('Vince il giocatore');
      
    }else{
      alert('Vince il pc');
    }
}

// function sommaPariDispari(somma){
//   if(!somma % 2){
//     return true;
//   }else{
//     return false;
//   }
// }
// *******************************
//      Stabiliamo vincitore
// *******************************