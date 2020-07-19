// function calculatePower(x, n) {
//   let result = 1;
//   for (i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// calculate power using recursion
function calculatePower(x, n) {
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * calculatePower(x, n - 1);
  return n === 1 ? x : x * calculatePower(x, n - 1);
}
console.log(calculatePower(2, 5));

const my = {
  name: "john",
  friends: [
    {
      name: "tom",
      friends: [
        {
          name: "gale",
          friends: [
            {
              name: "jack",
            },
            {
              name: "tim",
            },
          ],
        },
      ],
    },
    {
      name: "max",
    },
  ],
};

function printFriendsName(person) {
  const collectedNames = [];
  if (!person.friends) return [];
  for (const friends of person.friends) {
    collectedNames.push(friends.name);
    collectedNames.push(...printFriendsName(friends)); // using recursion to get all friends(all sub friends included) name
  }
  return collectedNames;
}
console.log(printFriendsName(my));
