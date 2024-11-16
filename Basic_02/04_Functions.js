// function myName(){
//     console.log('Pankaj');
    
// }
// myName();
// //num3 array
// function addTwoNumbers(num1,num2,...num3){
//     return num1+num2+num3;
// }

// console.log(addTwoNumbers(10,10,20,30));


// function userLoggrdIn(username = "pan"){
//     if (username === undefined){
//         console.log('Enter name');
//         return;
//     }
//     return `user : ${username}`;
// }

// console.log(userLoggrdIn());

// function outer(){
//     let a="outer function outer let a"
//     var b="outer function var b"
//     function inner(){
//         let a = "Inner function inner let a"
//         var b= " inner functionvar b"
//         console.log(a);
        
//     }
//     inner();
//     console.log(a);
//     console.log(b);
    
    
// }

// outer();

// //++++++++++++++++++++++Hoisting

// console.log(addOne(5));

// function addOne(num){
//     return num+1;
// }



// const addtwo = function (num) {
//     return num + 2;
// }
// console.log(addtwo(5));
//++++++++++++++++++++++++++++++++++arrow functions+++++++++++++++++++
const arrowFunc =  (num) => {
    return num + 2;
}
console.log(arrowFunc(8));

const arrfunc =  (num) => (num + 2);
console.log(arrfunc(5));