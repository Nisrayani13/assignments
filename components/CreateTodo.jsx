/*
export function CreateTodo(){
    return (
        <div>
            <input style={{
                padding:10,
                margin:10
            }} id="title" type="text" placeholder="Enter the title"></input>
            <br></br><br></br>
            <input style={{
                padding:10,
                margin:10
            }} id="des" type="text" placeholder="Enter description"></input>
            <br></br><br></br>
            <button style={{
                padding:10,
                margin:10
            }}  onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:{
                        title:document.querySelector("#title"),
                        description:document.querySelector("#des")
                    }
                })
                .then(async function(res){
                    const json=res.json();
                    alert("Todo added")
                })
            }}>Add todo</button>
        </div>
    )
}
*/
import { useState } from "react";
// doing with react query

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");

export function CreateTodo(){
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text"  onChange={function (event){
            const html_element=event.target;
            setTitle(event.target.value)
        }}></input>
        <input style={{
            padding:10,
            margin:10
        }} type="text" onChange={function (event){
            const html_element=event.target;
            setDescription(event.target.value);
        }}></input>
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(response){
                const json=response.json();
                alert("New todo added")
            })
        }}></button>
    </div>
}