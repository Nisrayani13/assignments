import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

// Solution:
// In a React functional component, when the component re-renders due to a state change, all the code inside the component function is executed again, including the initialization of the ALL_WORDS array 
// The sentences state is initialized with ALL_WORDS when the component is mounted. However, keep in mind that the useState hook is only called when the component is initially rendered. Subsequent re-renders, triggered by state changes or other reasons, will not reinitialize the state with ALL_WORDS. The state will retain its current value unless explicitly changed using the setSentences function.

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 5;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

// ALL_WORDS ia an array of sentences formed by the words in words array

export function Assignment2() {
    // console.log("App is rendering");
    // console.log(`ALL_WORDS : ${ALL_WORDS}`);
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    // console.log(`sentences before memo : ${sentences}`);

    const filteredSentences = useMemo(()=>{
        let array=sentences.filter((sentence)=>{
            return sentence.includes(filter)
        })
        return array;
    },[filter,sentences])

    // console.log(`sentences after memo : ${sentences}`);

    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}