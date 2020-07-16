// Static methods are called directly on the class - without creating an instance/object of the class.
// these methods cannot be called on instances of class
class Car {
  constructor(brand) {
    this.carName = brand;
  }
  static hello(car) {
    // static method using static keyword
    return `Hello!! ${car}`;
  }
  hello () {
    return `Hello!! ${this.carName}`;
  }
}

const myCar = new Car("Ford");
//  console.log(myCar.hello("car"));  // through an error - calling static using instance/object of class
console.log(Car.hello("ferrari")); // calling static method using class name
console.log(myCar.hello()); // calling method using instance of class
