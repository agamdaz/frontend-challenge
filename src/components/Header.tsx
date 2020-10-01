import React from 'react';
import { media, style } from 'typestyle';
import { commonCss } from './_commonCss';

const header = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: commonCss.baseSpacing,
  border: commonCss.defaultBorder,
});

const inputText = style({
  margin: commonCss.baseSpacing,
  padding: commonCss.baseSpacing,
  maxWidth: '100%',
  background: commonCss.secondaryColor,
  border: 'none',
  borderBottom: commonCss.defaultBorder,
  fontFamily: commonCss.fontFamily,
  fontWeight: 600,
  $nest: {
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
  }
}, media({ maxWidth: 420 }, { flexGrow: 1 }));

const button = style({
  margin: commonCss.baseSpacing,
  padding: commonCss.baseSpacing,
  background: commonCss.backgroundColor,
  border: commonCss.defaultBorder,
  fontFamily: commonCss.fontFamily,
  fontWeight: 600,
  cursor: 'pointer',
  $nest: {
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
    '&:disabled': {
      background: commonCss.secondaryColor,
      borderColor: commonCss.secondaryColor,
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
