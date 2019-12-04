import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getChosenCardsForColumn } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  return {
    cards: getChosenCardsForColumn(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);