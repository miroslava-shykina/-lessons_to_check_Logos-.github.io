function CoffeeMake(on, off){
    this.on = on;
    this.of = off;
}


function DripCoffeeMaker(on, off, typeOfCoffee, typeOfDrink){
    CoffeeMake.call(this, on, off);
    this.typeOfCoffee = typeOfCoffee;
    this.typeOfDrink = typeOfDrink;
}

DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constuctor = DripCoffeeMaker;

let drip1 = new DripCoffeeMaker('go', 'stop', 'ground coffee', 'black coffee');
console.log(drip1);




function CarobCoffeeMaker(on, off, autoShutdown, SteamSupply){
    CoffeeMake.apply[this, on, off];
    this.autoShutdown = autoShutdown;
    this.SteamSupply = SteamSupply;
}
CarobCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
CarobCoffeeMaker.prototype.constuctor = CarobCoffeeMaker;
  
let carob1 = new CarobCoffeeMaker('Make coffee', 'Your coffee is ready', 'Yes', 'Yes');
console.log(carob1);




function CoffeeMachine(on, off, touchscreen, milkSupply){
    CoffeeMake.call(this, on, off);
    this.touchscreen = touchscreen;
    this.milkSupply = milkSupply;
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMachine;
   
let CoffeeM1 = new CoffeeMachine('Coffee machine start', 'Coffee machine finish', 'Without touchscreen', 'Yes');
console.log( CoffeeM1);


