class Course {
    get priceC() {
        return this.price;
    }
    set priceC(value) {
      if (value < 0) {
        throw "Invalid value";
      }
      this.price =  "$" + value;
    }
    constructor(title, length, price) {
      this.title = title;
      this.length = length;
      this.priceC = price;
    }
    priceAccLength() {
      return `if you will pay ${this.priceC} you will get course of ${this.priceC / 8} hours`;
    }
    courseSummary() {
      return `Course : ${this.title},Time : ${this.length} , Price to buy: ${this.priceC}`;
    }
  }
  const javascript = new Course("Javascript", "50 hours", "400");
  const css = new Course("css", "20 hours", "160");
  // console.log(javascript.courseSummary(),javascript.priceAccLength());
  // console.log(css.courseSummary(),css.priceAccLength());
  
  class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercise) {
      super(title, length, price);
      this.numOfExercise = numOfExercise;
    }
  }
  
  class TheoreticalCourse extends Course {
    constructor(title, length, price) {
      super(title, length, price);
    }
  
    publish() {
      return "good";
    }
  }
  const practical = new PracticalCourse("javascript", 50, 400, 6);
  console.log(practical);
  const theoretical = new TheoreticalCourse("css", 160, 20);
  // console.log(theoretical.publish());
  