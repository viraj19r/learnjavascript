// api to control objects(there is also an reflect object). inbuilt api which has many methods to control objects

const course = {
  title: "Javascript",
  price: 400,
};
// reflect api to set prototype
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});
Reflect.deleteProperty(course, "price"); // reflect api to delete a property
// Object.deleteProperty(course,"price"); // this will not work(it was supported in older versions)
console.log(course);
console.log(course.toString());
