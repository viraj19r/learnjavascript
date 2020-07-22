function productDesc(strings, prodName, prodPrice) {
  console.log(strings);
  console.log(prodName);
  console.log(prodPrice);
  let priceCategory = "cheap";
  if (prodPrice > 200) {
    priceCategory = "expensive";
  }
  return `${strings[0]}${prodName}${strings[1]}${prodPrice} is ${priceCategory}`;
}

const productPrice = 210;
const productName = "javascript";
const productDetails = productDesc`The course ${productName} and its price is ${productPrice}`; // these are tagged templates
console.log(productDetails); // first arguments strings(stored all the string in the template),second argument(productName) and third argument (productPrice). this is how tagged template works
