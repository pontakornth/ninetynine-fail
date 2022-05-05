import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>99% will fail this game.</h1>
      <p>Can you do it? Are you a looser?</p>
    </div>
  );
};

export default App;
