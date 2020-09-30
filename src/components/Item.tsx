import React from "react";
import {style} from "typestyle";

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

type ListItemProps = {
  label: string,
}

export const ListItem = ({label}: ListItemProps) => (
  <li data-testid="list-item" className={itemList}>
    <button className={itemButton}>{label}</button>
  </li>
);
