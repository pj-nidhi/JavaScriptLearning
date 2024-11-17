for(let a=0;a<10;a++){
    // console.log(a);
}

a = [1,2,3,4,5,6,7]
a.forEach(Element => {
    console.log(Element);
});
let b=10 
while (b <15){
console.log(b);
b++;

}

// +++++++++++++++++++++++++

for (const num of a){
    console.log("for of ",num);
    
}

//++++++++++++++++MAPS

let m=new Map()
m.set("IN","India")
m.set("USA","america")

for (const [element,val] of m) {
    console.log(element,val);
    
}

for (const key in a) {
    console.log(a[key]);
    
}