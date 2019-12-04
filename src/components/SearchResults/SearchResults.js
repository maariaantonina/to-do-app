import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';


const SearchResults = ({ cards }) => {
  return (
    <section className={styles.component} >
      <div className={styles.cards}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section >
  );
};

SearchResults.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.string,
};

export default SearchResults;