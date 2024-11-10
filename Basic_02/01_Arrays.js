let arr = [1,2,3,4,5,6,7,8,9,];

const heros = new Array("batman","supernam","perman");


// console.log(myArr);
// console.log(arr);

//Menthods
arr.push(10);
heros.push("spiderman");
// arr.shift();
// arr.unshift(11);


// console.log(myArr);
// console.log(arr);
// // console.log(myArr);
// console.log(arr.includes(11));
// console.log(arr.indexOf(5));

//Slice , Splice
console.log("A ",heros);
console.log(typeof arr);

const myarr1= arr.slice(2,6);// slice(2,6);
console.log(myarr1);

const myarr2= arr.splice(2,6);// slice(2,6);
console.log(myarr2);
// console.log(arr.indexOf(5));

//do splice and slice doc

const herosArr = ["thor","ironman","hulk"];

heros.push(herosArr)

console.log(heros);

const marvel =["thor","ironman","hulk","dr.strange"];
const dc_heros=["superman","batman","flash"]

console.log("marvel ",marvel);
console.log("DC" ,dc_heros);
const allHeros = marvel.concat(dc_heros)

console.log("concat :",allHeros);
console.log("operator :",...marvel,...dc_heros);

const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

console.log(another_arr);
console.log(another_arr.flat(1));



