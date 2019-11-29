import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


const Card = ({ title }) => {
  return (
    <section className={styles.component}>
      {title}
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.node,
};
Card.defaultProps = {
  title: 'Title',
};

export default Card;