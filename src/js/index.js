// import axios, { Axios } from 'axios'

// async function getResult (querry) {
//     const key = '4d08ce58e497460ba4bc0aabe5b17da4'
//     const proxy = 'https://cors-anywhere.herokuapp.com/'
//     try {
//     // const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}?${querry}`)
//     const res = await axios(`https://forkify-api.herokuapp.com/api/get?`)
//     console.log(res)
//     } catch (error){
//         alert(error)
//     }
// }

// getResult()
// getResult('pizza')


const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi',
  headers: {
    'content-type': 'text/plain',
    'X-RapidAPI-Key': 'cb7b710f52mshe38f81889d65693p15941djsn902ec3ea4183',
    'X-RapidAPI-Host': 'mycookbook-io1.p.rapidapi.com'
  },
  data: 'https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



//GET https://api.spoonacular.com/recipes/complexSearch
// 4d08ce58e497460ba4bc0aabe5b17da4
// https://cors-anywhere.herokuapp.com/