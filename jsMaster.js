// //higher order fn are fn which accept another fn as input parameter or returns a fn as output
// //constructor fn me this keyword use hota h aur usey call krte time new keyowrd use hota hai
// //this keyword by default window object ko point krta h

// // function biscuitMold(){
// //     this.taste = "sweet"
// //     this.brand = "parle"
// //     this.price = 10
// //     this.color = "brown"
// //     this.weight
// // }

// // let myBicuit = new biscuitMold()
// // console.log(myBicuit.brand)
// // let newBiscuit = new biscuitMold()
// // newBiscuit.brand = "oreo"
// //use of constructor to make many elements of similar properties
// // console.log(newBiscuit.color)
// // console.log(newBiscuit.color)
// // console.log(typeof(newBiscuit.weight))

// //agar kisi langauge me functions ko variable ki tarah treat krte h toh woh language me first class hain
// // new ---> matlb new object ban gai h , "this" ki jagah object maan lo


// //iife --> immedietly invokable function expression
// //iife function ko turant chalaane ki kala, aise chalaye ki hum log private variable bana paao
// //eg
// var ans =(
//     function(){
//         var a = 12
//         return{
//             getter:function(){
//                 console.log(a);

//             } ,
//             setter:function(val){
//                 a = val

//             }          //getter is used to access private variable
//         }
//     }       // example of iife
// )()               
// ans.getter()
// ans.setter(99)
// ans.getter()


// //prototype contains helper properties predefined, methods pre defined that is used and provides additional functionality

// //prototype inheritance
// //basically inheritance for prototypes 
// //eg
// var Human = {
//     canFly:"no",
//     canTalk:"yes",
//     willDie:"yes"

// }

// var myStudent = {
//     develop: "yes",
//     interview:"yes"
// }


//  myStudent.__proto__ = Human //making prototype inheritance

//this call apply bind
/* jab bhi kuch likh rahe h, usme check krna h scope k liye {}
jo vairable {} k andar nhi h toh uska scope global hai
in method scope, 'this' gives us the object */

//capp, apply, bind --> agar koi function h usme 'this' refer kr rah h window ko aur hume usey kisi object ki taraf point krwana h toh hum .call() chala kr usme object pass krdenge
//example
function abc(a , b,  c){
    console.log(this.age)
    // console.log(a, b, c);
}

var obj = {age:26}

// abc.call(obj, 22, 12, "call method")
// abc.apply(obj, [1,2,3])
var bindedFunction = abc.bind(obj)  //bind chalata nhi h but abc ko obj se bind krke naya function de diya hai
bindedFunction()

/*pure functions -->  give same output for same input and it will not change the value of global variable*/