let arr = [1,2,3,4,5,6,7,8,9,];

const myArr = new Array("batman","supernam","perman");


// console.log(myArr);
// console.log(arr);

//Menthods
arr.push(10);
myArr.push("spiderman");
// arr.shift();
// arr.unshift(11);


// console.log(myArr);
// console.log(arr);
// // console.log(myArr);
// console.log(arr.includes(11));
// console.log(arr.indexOf(5));

//Slice , Splice
console.log("A ",myArr);
console.log(typeof arr);

const myarr1= arr.slice(2,6);// slice(2,6);
console.log(myarr1);

const myarr2= arr.splice(2,6);// slice(2,6);
console.log(myarr2);
// console.log(arr.indexOf(5));

//do splice and slice doc