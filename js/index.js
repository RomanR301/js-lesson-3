let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 150000;

function beep() {
    console.log(this.make + ' ' + this.model + ' beep-beep');
}

teslaX.beep = beep;
teslaX.beep();

let seatIbiza = {
    make: 'Seat',
    model: 'Ibiza',
    price: 11000,
    beep: beep
};

seatIbiza.beep();

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    return this;
}
Car.prototype.beep = beep;

let volkswagenBeetle = new Car('Volkswagen', 'Beetle', 20000);
volkswagenBeetle.beep();

let zazLanos = Object.create(null);
zazLanos.make = 'ZAZ';
zazLanos.model = 'Lanos';
zazLanos.price = 3000;
zazLanos.beep = beep;
zazLanos.beep();

let zazSens = Object.create(zazLanos);
zazSens.model = 'Sens';
zazSens.beep();
