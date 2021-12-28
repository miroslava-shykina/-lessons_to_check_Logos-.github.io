// task 1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const worker = new Worker("Ivan", "Ivanov", 10, 31);
const worker2 = new Worker("Pavlo", "Pavliv", 12, 28);
const worker3 = new Worker("Igor", "Romaniv", 8, 22);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());

console.log(worker3.name);
console.log(worker3.surname);
console.log(worker3.rate);
console.log(worker3.days);
console.log(worker3.getSalary());




// task 2
let v = [];
class MyString {
  reverse(word) {
    let wordSplit = word.split("");
    let wordRevers = wordSplit.reverse();
    let wordjoin = wordRevers.join("");
    return wordjoin;
  }

  ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  ucWords(word) {
    word = word.split(" ");

    for (let i = 0; i < word.length; i++) {
      let wordSplit = word[i].split("");
      let wordToApp = wordSplit[0].toUpperCase();
      let wordSlice = wordToApp + word[i].slice(1);
      v.push(wordSlice);
    }
    return v.join(" ");
  }
}

const str = new MyString();

console.log(str.reverse("IVAN")); //виведе 'NAVI'

console.log(str.ucFirst("arsenal")); //виведе 'Arsenal'

console.log(str.ucWords("arsenal arsenal arsenal")); //виведе 'Arsenal Arsenal Arsenal'





// task 3
class CoffeeMake {
  on(on = "on") {
    return `Coffeemaker is ${on}`;
  }

  off(off = "off") {
    return `Coffeemaker is ${off}`;
  }
}



class DripCoffeeMaker extends CoffeeMake {
  typeOfCoffee(typeCoffee) {
    return this.on() + ", use " + typeCoffee;
  }
  typeOfDrink(typeDrink) {
    return this.off() + ", pick up yours " + typeDrink;
  }
}

let drip1 = new DripCoffeeMaker();

console.log(drip1.typeOfCoffee("ground coffee"));
console.log(drip1.typeOfDrink("black coffee"));



class CarobCoffeeMaker extends CoffeeMake {
    autoShutdown(autoShutdown) {
    return this.on() + ", auto shutdown is " + autoShutdown;
  }
  steamSupply(steamSupply) {
    return this.off() + ", steam supply is " + steamSupply;
  }
}

let carob1 = new CarobCoffeeMaker();

console.log(carob1.autoShutdown("on"));
console.log(carob1.steamSupply("waiting"));



class CoffeeMachine extends CoffeeMake {
    touchscreen(touchscreen) {
    return this.on() + ", uze " + touchscreen;
  }
  milkSupply(milkSupply) {
    return this.off() + ", do you wount " + milkSupply;
  }
}

let CoffeeM1 = new CoffeeMachine();

console.log(CoffeeM1.touchscreen("touchscreen"));
console.log(CoffeeM1.milkSupply("milk"));
