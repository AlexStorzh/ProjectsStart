

const arr1 = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
const arr2 = [1, 2, 3, 4, 5, 6]
let arr3 = [];

for (let index = 0; index < arr1.length; index++) {
 arr3.push({
  name: arr1[index],
  value: arr2[index]
 })
 
}
console.log(arr3);