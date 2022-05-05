import { Component, createSignal, Index } from 'solid-js';
import { createStore } from 'solid-js/store';

import Footer from "./Footer";
import styles from './App.module.css';
import { generateFields, getFieldPower, getInitialPower } from './core/game';

const App: Component = () => {
  const [initialPower, setInitialPower] = createSignal(getInitialPower());
  const [fields, setFields] = createStore({ list: generateFields(initialPower(), 25) });
  const [lost, setLost] = createSignal(false);

  const handleClick = (index: number) => {
    if (!lost()) {
      if (fields.list[index] <= initialPower()) {
        setInitialPower(initialPower() + fields.list[index])
        setFields('list', index, getFieldPower(initialPower()));
      } else {
        setFields('list', index, fields.list[index] + initialPower())
        setInitialPower(-1)
        setLost(true)
      }
    }
  }
  return (
    <>
      <div class={styles.App}>
        <h1 classList={{ [styles.lost]: lost() }}>99% will fail this game.</h1>
        <p>Can you do it? Are you a looser?</p>

        <p>Your current power is {initialPower()}</p>
        <div class={styles.grid} >
          <Index each={fields.list}>
            {(field, i) =>
              <button onClick={() => handleClick(i)} disabled={lost()}>{field()} </button>
            }
          </Index>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
