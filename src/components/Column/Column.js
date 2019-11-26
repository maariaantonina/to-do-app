import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';



class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.node,
    icon: PropTypes.string,
  }
  static defaultProps = {
    title: 'Title',
  }
  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon} /></span>{this.props.title}</h3>
        {this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps}>
          </Card>
        ))}
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
      </section>
    );
  }
}

export default Column;