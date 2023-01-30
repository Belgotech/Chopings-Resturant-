import axios, { Axios } from 'axios'

async function getResult (querry) {
    const key = '4d08ce58e497460ba4bc0aabe5b17da4'
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    try {
    const res = await axios(`${proxy}https://api.spoonacular.com/recipes/complexSearch?apiKey=${key} ${querry}`)
    // const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`)
    console.log(res)
    } catch (error){
        alert(error)
    }
}

getResult('pizza')




//GET https://api.spoonacular.com/recipes/complexSearch
// 4d08ce58e497460ba4bc0aabe5b17da4
// https://cors-anywhere.herokuapp.com/