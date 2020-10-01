import React from 'react';
import { media, style } from 'typestyle';

const header = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '8px',
  border: '2px solid #000',
});

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
}, media({ maxWidth: 420 }, { flexGrow: 1 }));

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
    '&:disabled': {
      background: '#ececec',
      borderColor: '#ececec',
      cursor: 'not-allowed',
    }
  }
}, media({ maxWidth: 420 }, { flexGrow: 1 }));

type HeaderProps = {
  inputPlaceholder: string,
  buttonLabel: string,
  clearButtonActive: boolean,
  clearButtonClick: () => void,
  filterType: (e:any) => void,
}

export const Header = (props: HeaderProps) => {
  const {inputPlaceholder, buttonLabel, clearButtonActive, clearButtonClick, filterType} = props;

  return (
    <header data-testid="app-header" className={header}>
      <input
        className={inputText}
        type="text"
        onChange={filterType}
        placeholder={inputPlaceholder}/>
      <button
        className={button}
        onClick={() => clearButtonClick()}
        disabled={clearButtonActive}
      >
        {buttonLabel}
      </button>
    </header>
  );
}
