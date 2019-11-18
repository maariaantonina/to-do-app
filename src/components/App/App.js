import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Hero from '../Hero/Hero';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <Hero />
        <List />
      </main>
    );
  }
}

export default App;
