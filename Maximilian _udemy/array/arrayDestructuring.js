const data = ["Dan", "Abramov", 35, "good person"];
// const firstName = data[0];
// const lastName = data[1];

const [firstName, lastName, ...otherInformation] = data;
console.log(otherInformation);
