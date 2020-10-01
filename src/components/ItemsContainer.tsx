import React from "react";
import { ListItem } from './Item';
import { style } from 'typestyle';
import { commonCss } from './_commonCss';

const itemsContainer = style({
  width: '50%',
  minHeight: '300px',
  margin: 0,
  padding: 0,
  border: commonCss.defaultBorder,
});

type ListContainerProps = {
  items: string[],
  onClick: (label: string) => void,
}

export const ItemsContainer = ({items, onClick}: ListContainerProps) => (
  <ul data-testid="items-container" className={itemsContainer}>
    {items.map((label, key) => (
      <ListItem key={key} label={label} onClick={onClick}/>
    ))}
  </ul>
);
