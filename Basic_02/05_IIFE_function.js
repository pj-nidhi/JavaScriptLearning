//variables in function get poluted by global variables , IFFE function run immdietly to avlod polut

(function chai(){
 console.log("Chai pilo");
})();
//note - always require ; in the end or throws error
(function chai(){
    console.log("Garam hai ");
   })();

((name)=>{
    console.log("hello  " , name);
})("pankaj");