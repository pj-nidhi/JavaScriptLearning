let ddate = new Date();

console.log(ddate.toString());
console.log(ddate.toDateString());
console.log(ddate.toJSON());
console.log(ddate.toLocaleString());

let myCreatedDate = new Date(2024,10,10,12,25);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(myCreatedDate.getTime()/1000));


console.log(myCreatedDate.toLocaleString("default",{
    weekday: "long"
}));
