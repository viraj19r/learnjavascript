class Post {
  constructor(name, title, description) {
    this.name = name;
    this.title = "profile pic";
    this.description = "new pic";
  }
  getDetails() {
    return `${this.name} has posted his ${this.title}`;
  }
}
class ImagePost extends Post { // extends create child class ImagePost of the parent class Post. Now the child class will inherit all the properties and methods of the parent class.
  // inheritance -
  constructor(name, title, description, imageUrl, imageAltText) {
    super(name, title, description); //The super keyword refers to the parent class.It is used to call the constructor of the parent class and to access the parent's properties and methods.
             // we can say that super is used to call the constructor of the parent class
    this.imageUrl = imageUrl;
    this.imageAltText = imageAltText;
  }
  getDetails() {
    // method overriding
    return `${this.name} has posted his ${this.title}, named ${this.imageAltText}`;
  }
  getImageUrl() {
    return `Required image URL : ${this.imageUrl}`;
  }
}
class VideoPost extends Post {}
const post = new ImagePost("viraj", this.title, this.description, "image.com", "new image");
console.log(post.getDetails());
console.log(post.getImageUrl());
