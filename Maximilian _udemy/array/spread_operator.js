const amount = [4, 5.6, 3, 6, 2.66];
const copyAmount = [...amount];
amount.push(9);// 9 will not push in copyAmount
// console.log(copyAmount);
const obj = [{planet:"earth"},{planet:"mars"}];
const copyObj  = [...obj];
obj.push({planet:"jupiter"});
obj[1].planet = "mercury";  // now this will change the copyObj property too
console.log(copyObj); 