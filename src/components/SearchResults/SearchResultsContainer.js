import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getChosenCardsForColumn } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getChosenCardsForColumn(state, string),
  };
};

export default connect(mapStateToProps)(SearchResults);