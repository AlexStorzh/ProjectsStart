const attributesName = ['AGI', 'STR', 'WIS', 'INT', 'CHA', 'END'];
let arr3 = Array(6);
let arr1 = [4, 6, 10, 12, 14, 16]
let arr2 = arr1.map(e => {
 if (e >= 10) {
  return (e - 10) /2
 } else {
  return (e - 10) /2
 }
})

let obj = [
{
 name: 'AGI',
 value: '',
},
{
 name: 'STR',
 value: '',
},
{
 name: 'WIS',
 value: '',
}
]
arr3.map(obj => ({ ...obj, Active: 'false'}))

// for (let i = 0; i < obj.length; i++) {
//  arr3[i].name = attributesName[i];
//  obj[i].value = arr2[i];
// }

console.log(obj)
console.log(arr3)