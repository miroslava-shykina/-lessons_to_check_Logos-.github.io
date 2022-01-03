
const beerPrice = 30;
const winePrice = 70;
const pepsiPrice = 50;
const beerStart = 100;
const wineStart = 50;
const pepsiStart = 80;
const bankStart = 1000;

let bank = bankStart;
let beerRest = beerStart;
let wineRest = wineStart;
let pepsiRest = pepsiStart;



function checkRestBeer(beerCount){
beerRest -= beerCount;
return beerRest;
}

function checkBeer(beerCount){
return beerCount * beerPrice;
}

function checkRestWine(wineCount){
  wineRest -= wineCount;
  return wineRest;
}

function checkWine(wineCount){
return wineCount * winePrice;
}

function checkRestPepsi(pepsiCount){
  pepsiRest -= pepsiCount;
  return pepsiRest;
}

function checkPepsi(pepsiCount){
return pepsiCount * pepsiPrice;
}


function checkStorage(summBeer, summWine, summPepsi){
return summBeer + summWine + summPepsi;
}

function checkBank(summAll){
  bank = bank + summAll;
return bank;
}


export {checkBank, checkRestBeer, checkBeer, checkRestWine, checkWine, checkRestPepsi, checkPepsi, checkStorage};