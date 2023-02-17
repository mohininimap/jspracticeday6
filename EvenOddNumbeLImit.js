// function evenOdd(limit){
// for(i=0;i<limit;i++){
//     if(i%2===0){
//         console.log(i +"is even");
//     }else if(i%2!==0){
//         console.log(i +"is odd");
//     }
// }
// }

// evenOdd(10);

// ============================================
//Second way

// function evenOdd(limit){
// for(let i=0;i<limit;i++){
//   const message=(i%2===0)?"Even ...":"Odd ...";
//   console.log(i, message)
// }
// }

// evenOdd(10)

// ============================================

// const isActive=true;
// const name='';
//output is falsy false
// console.log(name)
// ----------------------------
// truthy value
// const isActive=true;
// const name='Mohini';
//output is falsy false
// console.log(name)

// ================================
// complete list of falsy value
// Falsy->boolean false
// undefined
// null
// ''
// false
// 0

// =========================
// Count truthy value

// First way

// const isActive=true;
// if(isActive) console.log("Hello Mohini")

//is a boolean true but sometimes what we have be a string ,it could be a number,it could be an object,so the javascript number

// const name='mohini';
// //above truthy value
// if(name) console.log("Hello")

// --------------------------

// const name='';
// //above falsy value
// if(name) console.log("Hello")
// -----------------------

// const array =[0,'',undefined,null,2,3,7,8];

// //if array values not boolean then javascript value try to interprete truthy and falsy values
// function countTruthy(array){
// let count=0;
// for(let value of array)
// if(value)
// count++;
// return count;
// }

// console.log(countTruthy(array))

// =======================
// string properties

// const movie={
//     title:"a",
//     releaseYear:2018,
//     rating:4.5,
//     director:"b"
// }

//  function showProperties(obj){
//     for(let key in movie){
//         if(typeof obj[key]==='string')
//         console.log(key +"    "+obj[key])   
//     }

//  }   

//  showProperties(movie)
// ==============================

// multiple of 3 and multiple of 5 that number add limit is passed to the function

// function addMultipleNum(num){
//    let sum=0;
// for(let i=0;i<=num;i++)
// {
// if(i%3===0 || i%5===0)
//     sum+=i
// }
// return sum;

// }

// console.log(addMultipleNum(10))

// ==============================
// Grade
// const marks=[99,98,97];
//1-59 =>F
//60-69 =>D
//70-79=>C
//80-89=>B
//90-100=>A

// function Grade(marks){
//     let sum=0;
   
// for(let mark of marks)
// sum+=mark;
// let avg=sum/marks.length;

//  if(avg<60) return 'F';
//  if(avg<70) return 'D';
//  if(avg<80) return 'C';
//  if(avg<90) return 'B';
//  return 'A';
// }
// console.log(Grade(marks));

// --------------------------------

// Second way average grade

const marks=[75,75,75]


function gradeSt(marks){
    let avg=calculateAverage(marks)
    
    if(avg<60) return 'F';
    if(avg<70) return 'D';
    if(avg<80) return 'C';
    if(avg<90) return 'B';
   return A;
    }

function calculateAverage(m){
let sum=0;
for(let value of m)
sum+=value;
return sum/m.length;
}



console.log(gradeSt(marks))