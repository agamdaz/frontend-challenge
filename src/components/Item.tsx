import React from 'react';
import { style } from 'typestyle';
import { commonCss } from "./_commonCss";

const itemList = style({
  listStyleType: 'none',
});

const itemButton = style({
  width: '100%',
  padding: commonCss.doubleSpacing,
  border: 'none',
  borderBottom: commonCss.defaultBorder,
  backgroundColor: commonCss.backgroundColor,
  fontFamily: commonCss.fontFamily,
  fontWeight: 600,
  textAlign: 'left',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      backgroundColor: commonCss.secondaryColor,
    },
    '&:focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none',
    },
  }
});

type ListItemProps = {
  label: string,
  onClick: (label: string) => void,
}

export const ListItem = ({label, onClick}: ListItemProps) => (
  <li data-testid="list-item" className={itemList}>
    <button className={itemButton} onClick={() => onClick(label)}>{label}</button>
  </li>
);
