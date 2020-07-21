let obj = {
  currentEmployee: 0,
  employees: ["emp1", "emp2", "emp3"],

  next() {
    // next is symbol iterable function built in to iterate over the objects.(it works as for in/of loop)
    const returnValue = {
      value: this.employees[this.currentEmployee],
    };
    this.currentEmployee++;
    return returnValue;
  },
};
console.log(next()); // emp1
console.log(next()); //emp1
console.log(next()); //emp3

//Regular functions return only one, single value (or nothing).
// Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.
