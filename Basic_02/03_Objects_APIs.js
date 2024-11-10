const course ={
    courseName :'Js Hindi',
    price: 222,
    courseInstructor :"hitesh"
}

console.log(course);
//Objects Destructure
const {courseInstructor : inst} = course;
console.log(inst);
//in React 
// const navBar = ({company}) =>{

// }

// navBar(company = "react")
