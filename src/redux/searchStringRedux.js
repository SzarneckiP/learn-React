
// selectors
export const getSearchString = ({ searchString }) => searchString; // getSearchString musi zwracać wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji

export const countAllCards = ({ cards }) => cards.length;

export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; //ta funkcja działa tak tamo jak countAllCards tylko filtruje karty 'card'

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`; //Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'.

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE }); // sam payload bez  generowania krótkich, losowych identyfikatorów

// reducer
export default function reducer(statePart = '', action = {}) {
    switch (action.type) {
        case CHANGE:
            return action.payload;
        default:
            return statePart;
    }
}

