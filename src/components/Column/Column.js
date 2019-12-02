import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import { Droppable } from 'react-beautiful-dnd';


const Column = ({ title, icon, cards, addCard, id }) => {
  return (
    <section className={styles.component} >
      <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
      <Droppable droppableId={id}>
        {provided => (
          <div className={styles.cards}  {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      < Creator text={settings.cardCreatorText} action={addCard} />
    </section >
  );
};

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  title: 'Title',
  icon: settings.defaultColumnIcon,
};

export default Column;