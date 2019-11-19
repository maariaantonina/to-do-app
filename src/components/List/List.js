import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';


class List extends React.Component {
  static PropTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imagePath={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'One'} />
          <Column title={'Two'} />
          <Column title={'Three'} />
        </div>
      </section>
    );
  }
}

export default List;