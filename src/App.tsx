import React from 'react';
import { cssRaw, cssRule, style, media } from 'typestyle';
import { normalize, setupPage } from "csstips";

cssRaw(`
  @import url('https://fonts.googleapis.com/css?family=Courier+Prime');
`);

normalize();
setupPage('#root');

cssRule('body', {
  backgroundImage: 'url("background.svg")',
});

const container = style({
  margin: 'auto',
  maxWidth: '580px',
  padding: '8px',
}, media({ minWidth: 420 }, { marginTop: '10vh' }))

const layout = style({
  border: '2px solid #000',
  background: '#fff',
})

const header = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '8px',
  border: '2px solid #000',
})

const inputText = style({
  margin: '8px',
  padding: '8px',
  maxWidth: '100%',
  background: '#ececec',
  border: 'none',
  borderBottom: '2px solid #000',
  fontFamily: 'Courier Prime, monospace',
  fontWeight: 600,
  $nest: {
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
  }
}, media({ maxWidth: 420 }, { flexGrow: 1 }))

const button = style({
  margin: '8px',
  padding: '8px',
  background: '#fff',
  border: '2px solid #000',
  fontFamily: 'Courier Prime, monospace',
  fontWeight: 600,
  cursor: 'pointer',
  $nest: {
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
  }
}, media({ maxWidth: 420 }, { flexGrow: 1 }))

const content = style({
  display: 'flex',
})

const itemsContainer = style({
  width: '50%',
  minHeight: '300px',
  margin: 0,
  padding: 0,
  border: '2px solid #000',
})

const itemList = style({
  listStyleType: 'none',
})

const itemButton = style({
  width: '100%',
  padding: '16px',
  border: 'none',
  borderBottom: '3px solid #000',
  backgroundColor: '#fff',
  fontFamily: 'Courier Prime, monospace',
  fontWeight: 600,
  textAlign: 'left',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      backgroundColor: '#ececec',
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
  }
})

function App() {
  return (
    <div className={container}>
      <main className={layout}>
        <header className={header}>
          <input className={inputText} type="text" placeholder="Type to search"/>
          <button className={button}>Clear all!</button>
        </header>
        <section className={content}>
          <ul className={itemsContainer}>
            <li className={itemList}>
              <button className={itemButton}>Enterprise</button>
            </li>
            <li className={itemList}>
              <button className={itemButton}>Atlantis</button>
            </li>
            <li className={itemList}>
              <button className={itemButton}>Columbia</button>
            </li>
          </ul>
          <ul className={itemsContainer}>
            <li className={itemList}>
              <button className={itemButton}>Endeavour</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
