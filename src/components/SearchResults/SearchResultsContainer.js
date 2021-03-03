import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
    const searchString = props.match.params.searchString;
    const filteredResults = state.cards.filter(card => card.searchString == searchString);
    const ResultParams = filteredResults[0] || {};
    return {
        ...ResultParams,
        cards: getCardsForSearchResults(state, searchString),
    };
};

export default connect(mapStateToProps)(SearchResults);