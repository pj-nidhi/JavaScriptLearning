let str = new String("Hello World0");
let str2 = String(str);
console.log(str , typeof str);
console.log(str2, typeof str2);

console.log(str2.charAt(4));
console.log(str.length);

console.log(str.lastIndexOf("l"));
console.log(str.slice(3,7));
console.log(str.substring(2,9))
console.log(str.toLocaleUpperCase());
console.log(str2.matchAll('[a-z]'));//need to lookat it afterwords

function myFunction() { 
  
    //Regular expression with the /g flag
    const regex = /e(xam)(ple(\d?))/g;
    //Reference string
    const str = 'example1example2example3';
    
    //Using matchAll() method
    const array = [...str.matchAll(regex)];
    
    console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
}  
myFunction();