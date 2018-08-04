import Search from './models/Search';

//Global state of app
const state = {}

const controlSearch = async () => {
    //get query from view
    const query = 'pizza' //todo

    if (query) {
        //new search object and add to state
        state.search = new Search(query);

        //3 prepare UI for results

        //4 Search for recipes
        await search.getResults();

        //5 render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//ec10b3066d895b5626a7f081ef8199de
//http://food2fork.com/api/search

