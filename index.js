import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
//Global state of app
const state = {}

const controlSearch = async () => {
    //get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        //new search object and add to state
        state.search = new Search(query);

        //3 prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        //4 Search for recipes
        await state.search.getResults();

        //5 render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//ec10b3066d895b5626a7f081ef8199de
//http://food2fork.com/api/search

