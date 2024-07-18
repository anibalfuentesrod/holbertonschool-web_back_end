const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to call the symbol method
  cloneCar() {
    return this[cloneSymbol]();
  }
}
