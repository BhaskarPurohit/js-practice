const myNum = [1,2,3,4,5,6,7,8,9,10]

let tenNum = myNum.map((num)=>{
    return num+10

}).filter((num)=> num>15)

console.log(tenNum );