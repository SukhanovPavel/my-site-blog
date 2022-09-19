import React from "react";
import Main from "./components/Main/Main"
import Header from "./components/Header/Header";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header}/>
      <Main className={styles.main}/>
    </div>
  );
}

export default App;
