import React from "react";
import {style} from "typestyle";
import {ListItem} from "./Item";

const itemsContainer = style({
  width: '50%',
  minHeight: '300px',
  margin: 0,
  padding: 0,
  border: '2px solid #000',
})

type ListContainerProps = {
  items: string[],
}

export const ItemsContainer = ({items}: ListContainerProps) => (
  <ul data-testid="items-container" className={itemsContainer}>
    {items.map((label, key) => (<ListItem key={key} label={label}/>))}
  </ul>
);
