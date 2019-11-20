import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }
  static defaultProps = {
    title: 'Title',
  }
  render() {
    return (
      <section className={styles.component}>
        {this.props.title}
      </section>
    );
  }
}

export default Card;