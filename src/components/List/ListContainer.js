import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from './../../redux/columnsRedux';


//export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const filteredLists = state.lists.filter(list => list.id == id); //obiekt z właściwościami tej listy - filtrujemy stan aplikacji.
    const listParams = filteredLists[0] || {};
    return {
        ...listParams, //Rozpakowaliśmy zawartość listParams do zwracanego obiektu, aby właściwości takie jak title czy description zostały przekazane do komponentu List jako propsy.
        columns: getColumnsForList(state, id),
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addColumn: title => dispatch(createActionAddColumn({
        listId: props.match.params.id,
        title,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);