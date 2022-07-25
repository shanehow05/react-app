import React from "react"
import {useState, useEffect} from 'react'
import { createPassword, createPasswordTwo } from "../services/Constants"



function CreatePassword () {
    const [password, setPassword] = useState([])
    const [passwordTwo, setPasswordTwo] = useState([])


    async function handleClick () {
        const token = await createPassword()
        const tokenTwo = await createPasswordTwo()
        setPassword(token.data.data)
        setPasswordTwo(tokenTwo.data.data)
    
        // console.log(token.data.data)
    }



    useEffect (() => {
        handleClick();
    }, [])

    return (
        <div className="container"> 
            <div className="generator">
                <h2 className="generator-header">Password Generator</h2>
                <div className="generator-password">
                    <h4 className="password">Letter Only Password</h4>
                    <p className="password">{passwordTwo}</p>
                    
                    
                <h3 className="password"> Mixed Password </h3>
                <p className="password">{password}</p>
                <button className="generate-button" onClick={handleClick}>Generate</button>
                
                </div>
                


            </div>



        </div>
    )
}

export default CreatePassword