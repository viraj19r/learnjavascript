class Animal {
  
    constructor(type , breed, color, food) {
    this.animalType = type;
    this.animalBreed = breed;
    this.animalColor = color;
    this.animalFoodType = food;
  }
}
const dog = new Animal("dog", "shepherd", "grey", "non veg");
const dog2 =new Animal("dog","beagle","brown","veg");
console.log(dog,dog2);
