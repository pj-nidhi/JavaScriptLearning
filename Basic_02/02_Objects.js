const mysymbol =Symbol("abc")

const userInfo = {
    name :"pankaj",
    "full name" : "pankaj Nidhi",
    [mysymbol] : "abcd",
    age : 20,
    email :"paka@gmail.com",
    isLogedin : false,
    greetings : function greeings () {
        console.log(`Hello user ${this["full name"]}`);
        
    }
}

console.log(userInfo[mysymbol]);
console.log(userInfo);
//Object.freez(userInfo)
console.log(userInfo["full name"]);
console.log(userInfo.greetings);

userInfo.greetings()
console.log('----------------Part 2--------------------');

//Singleton

//Object Litral
const tinderUser =new Object();
tinderUser.id= "11qq";
tinderUser.name="span";
tinderUser.isLogedin=false;

console.log(tinderUser);

const rUser  = {
    email : 'pankaj@.com',
    fullname : {
        userfullname : {
            name : 'pankaj',
            lastName : 'Nidhi'
        }
    }
}

console.log(rUser);

//spread Operator ...
const obj2 = Object.assign({},tinderUser,rUser);
const obj3 = {...tinderUser,...rUser};

console.log(obj3);
console.log(obj2);

