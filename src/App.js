import React, { useState } from 'react';
import './App.css';
import WordToFlag from "./word-to-flag/WordToFlag";

function App() {
  const [word, setWord] = useState('');
  return (
      <div className={'flag-abc'}>
          <h1>Flag ABC</h1>
          <p>
              Display your name or any other text using flags of <a href={'https://en.wikipedia.org/wiki/International_Code_of_Signals'} target={'_blank'}>International Code of Signals</a>.
          </p>
          <p>
              <input onChange={(event) => setWord(event.target.value)} value={word} placeholder={'Enter your text here'}/>
          </p>
          <WordToFlag word={word}></WordToFlag>
      </div>
  );
}

export default App;
