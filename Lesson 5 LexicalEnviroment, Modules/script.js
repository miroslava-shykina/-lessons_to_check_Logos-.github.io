// Task 1
function counter() {
  let q = 0;
  return function inner(step) {
    q = q + step;
    console.log("Count = ", q);
  };
}
let fn = counter();
fn(3);
fn(5);
fn(228);
fn(500);
fn(1000);



// Task 2

import {
  checkBank,
  checkRestBeer,
  checkBeer,
  checkRestWine,
  checkWine,
  checkRestPepsi,
  checkPepsi,
  checkStorage,
} from "./module.js";




let qSel = (selector) => document.querySelector(selector);
let getID = (id) => document.getElementById(id);

let beerCount = 0;
let wineCount = 0;
let pepsiCount = 0;
let p;



//event "add drinks to basket"
qSel(".add").addEventListener("click", function () {

  let beerRest = qSel(".beer").value;
  let beerRest2 = `Пива ${beerRest}`;
  let wineRest = qSel(".wine").value;
  let wineRest2 = `Вина ${wineRest}`;
  let pepsiRest = qSel(".pepsi").value;
  let pepsiRest2 = `Пeпсі ${pepsiRest}`;

  let valueDrinks = getID("value").value;
  let place = qSel(".textarea");
  p = document.createElement("p");

  let b = qSel(".beer").value;
  let b1 = b.split(" ");
  let b2 = b1[0];

  let w = qSel(".wine").value;
  let w1 = w.split(" ");
  let w2 = w1[0];

  
  let pep = qSel(".pepsi").value;
  let pep1 = pep.split(" ");
  let pep2 = pep1[0];


  if (getID("beer").checked) {
    let newBeerCount = beerCount + parseInt(valueDrinks);
    if (newBeerCount <= b2) {
      beerCount = newBeerCount;
      p.textContent = `Пиво: ${valueDrinks} шт`;
      place.append(p);
      getID("value").value = "";
    } else {
      checkRest();
      qSel(
        ".message"
      ).textContent = `Вибачте, Ви хочете замовити більше ніж є на складі: ${beerRest2},з врахуванням вже замовленого`;
      return;
    }
  }
  if (getID("wine").checked) {
    let newWineCount = wineCount + parseInt(valueDrinks);
    if (newWineCount <= w2) {
      wineCount = newWineCount;
      p.textContent = `Вино: ${valueDrinks} шт`;
      place.append(p);
      getID("value").value = "";
    } else {
      checkRest();
      qSel(
        ".message"
      ).textContent = `Вибачте, Ви хочете замовити більше ніж є на складі: ${wineRest2},з врахуванням вже замовленого`;
    }
  }
  if (getID("pepsi").checked) {
    let newPepsiCount = pepsiCount + parseInt(valueDrinks);
    if (newPepsiCount <= pep2) {
      pepsiCount = newPepsiCount;
      p.textContent = `Пепсі: ${valueDrinks} шт`;
      place.append(p);
      getID("value").value = "";
    } else {
      checkRest();
      qSel(
        ".message"
      ).textContent = `Вибачте, Ви хочете замовити більше ніж є на складі: ${pepsiRest2},з врахуванням вже замовленого`;
    }
  }
});



//function "check rest"
function checkRest() {

  qSel(".modal-container").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  qSel(".modal-container").style.zIndex = "3";

  qSel(".confirm").style.display = "flex";
  qSel(".confirm").style.top = "25px";
  qSel(".confirm").style.zIndex = "99";

  qSel(".message").textContent = ``;
  qSel(".buttons").style.justifyContent = "center";
}


//event btn-close
qSel(".btn-close").addEventListener("click", () => {
  qSel(".modal-container").style.backgroundColor = "#fff";
  qSel(".modal-container").style.zIndex = "-1";
  qSel(".confirm").style.display = "none";
  getID("value").value = "";
});


//event "buy dinks"
qSel(".buy").addEventListener("click", function () {

  qSel(".right").innerHTML = "";

  let textarea = qSel(".textarea").innerHTML;

  qSel(".right").innerHTML = textarea;

  let summBeer = checkBeer(beerCount);
  let summWine = checkWine(wineCount);
  let summPepsi = checkPepsi(pepsiCount);
  let summAll = checkStorage(summBeer, summWine, summPepsi);

  p = document.createElement("p");
  p.textContent = `Усього ${summAll} гривень`;
  qSel(".right").append(p);

  let curBank = checkBank(summAll);
  qSel(".balance").value = `${curBank} грн`;
  qSel(".textarea").innerHTML = "";

  let curBeerRest = checkRestBeer(beerCount);
  qSel(".beer").value = `${curBeerRest} шт`;

  let curWineRest = checkRestWine(wineCount);
  qSel(".wine").value = `${curWineRest} шт`;

  let curPepsiRest = checkRestPepsi(pepsiCount);
  qSel(".pepsi").value = `${curPepsiRest} шт`;

  beerCount = 0;
  wineCount = 0;
  pepsiCount = 0;
});
