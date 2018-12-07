import { foodKey } from './keys';

const foodController = {
    _baseURL: ' ',
    _foodListElement: null,
    _foodList: null,
    _query = '',
    init: function() {
        this._foodListElement = document.getElementById('foodList');
        this._foodList = [];
    },

    searchFood: async function(q = this._query) {
        this._foodListElement.innerHTML = '';
        this._query = q;
        this._foodList = await getJSON(this._baseURL);
    }
}

function getJSON(URL) {
    return fetch(URL)
    .then(function(response) {
        if(!response.ok) {

        }
        else {

        }
    })
}