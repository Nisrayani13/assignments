import { number, string } from 'zod';
import './App.css'

const users=[{
  name:"nishu1",
  age:19
},{
  name:"nishu1",
  age:20
}]

function App() {
  return (
    // <Todo title='Gym' description='from 8-9' done={true}>
    // </Todo> 
    <div>
      {cntAge(users)}
    </div>
  )
}

// type User={
//   name:string
//   age:number
// }
interface User{
  name: string
  age:number
}

function cntAge(users: User[]){
  let n:number=0;
  users.forEach(user => {
    if(user.age>18)n++
  });
  return n;
}

// interface TodoProp{
//   title: string,
//   description : string,
//   done: boolean
// }

// function Todo(props:TodoProp){
//   return (
//     <div>
//       <h1> {props.title} </h1>
//       <p>{props.description} </p>
//       <p>{props.done} </p>
//     </div>
//   )
// }

export default App
