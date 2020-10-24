import * as React from 'react';
import Die from './die-plain';
// import styles from './app.module.css';

export default function App() {
  return (
    <html>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <Die numPips={6} /> <Die numPips={6} /> <Die numPips={2} />
    </html>
  );
  //   <>
  //     <meta name="apple-mobile-web-app-capable" content="yes" />
  //     <div className={"App"}>
  //       <div className="App-header">
  //         {/* <img src={die_face} className="App-logo" alt="logo" /> */}
  //         <h2 className={styles.gone}>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/app.js</code> and save to reload.
  //     </p>
  //     </div>
  //   </>
  // );
}

