import shortid from 'shortid';

// selectors
export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns'; //ustawiamy nazwę właściwości na którym chcemy operować
const createActionName = name => `app/${reducerName}/${name}`; //Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'.

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(statePart = [], action = {}) {
    switch (action.type) {
        case ADD_COLUMN:
            return [...statePart, action.payload];
        default:
            return statePart;
    }
}