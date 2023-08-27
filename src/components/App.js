import React, { Component, useState } from "react";
import '../styles/App.css';


const removeChar = (str = '', index) => {
    return str.substring(0, index) + str.substring(index + 1)
}
const App = () => {

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [result, setResult] = useState("");

    const calculateRelationship = () => {

        if(firstName.trim() === "" || secondName.trim() === ""){
            setResult("Please Enter valid input")
            return
        }
        let fName = firstName
        let sName = secondName
        Array.from(firstName).forEach((val, index) => {
            if (sName.includes(val)) {
                sName = removeChar(sName, sName.indexOf(val))
                fName = removeChar(fName, fName.indexOf(val))
            }
        })

        console.log(fName, sName);
        const r = (fName.length + sName.length) % 6

        
        switch (r) {
            case 0:
                setResult('Siblings')
                break
            case 1:
                setResult("Friends");
                break;
            case 2:
                setResult("Love")
                break;
            case 3:
                setResult("Affection");
                break
            case 4:
                setResult("Marriage")
                break
            case 5:
                setResult("Enemy")
                break
            default:
                setResult('Please Enter valid input')
        }
    }

    return (
        <div id="main">
            <input data-testid="input1" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input data-testid="input2" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship</button>
            <button data-testid="clear" onClick={() => {
                setFirstName('')
                setSecondName('')
                setResult('')
            }}>Clear</button>
            <h3 data-testid="answer">{result}</h3>
            {/* Do not remove the main div */}
        </div>
    )
}



export default App;
