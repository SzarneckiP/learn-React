import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards'; //ustawiamy nazwę właściwości na którym chcemy operować
const createActionName = name => `app/${reducerName}/${name}`; //Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'.

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD }); //shortid.generate -  generowanie krótkich, losowych identyfikatorów

// reducer
export default function reducer(statePart = [], action = {}) {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, action.payload];
        default:
            return statePart;
    }
}