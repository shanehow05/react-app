import axios from "axios";


export async function  createPassword () {
    const response = await axios.get ('https://passwordinator.herokuapp.com/generate?num=true&caps=true&char=true&len=10')
    console.log(response)
    return response
}

export async function createPasswordTwo () {
const response = await axios.get ('https://passwordinator.herokuapp.com/generate?caps=true&len=12')
console.log(response)
return response
}



