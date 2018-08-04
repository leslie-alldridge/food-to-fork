import axios from 'axios';


//ec10b3066d895b5626a7f081ef8199de
//http://food2fork.com/api/search

async function getResults(query) {
    const key = 'ec10b3066d895b5626a7f081ef8199de';
    const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);   
}

getResults('pizza');