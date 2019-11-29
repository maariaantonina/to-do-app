import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';



const Column = ({ title, icon, cards, addCard }) => {
  return (
    <section className={styles.component} >
      <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
      {cards.map(cardsData => (
        <Card key={cardsData.id} {...cardsData} />
      ))
      }
      < Creator text={settings.cardCreatorText} action={addCard} />
    </section >
  );
};

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  title: 'Title',
  icon: settings.defaultColumnIcon,
};

export default Column;