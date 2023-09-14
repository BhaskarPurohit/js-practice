const [one , two, ...rest] = [1,2,3,4]
console.log(one);
console.log(two);
console.log(rest);

const obj1= {name:"bhaskar", age:26}
const obje2 = {...obj1, city:"pune"}
console.log(obje2);