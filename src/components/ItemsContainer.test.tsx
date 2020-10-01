import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemsContainer } from "./ItemsContainer";

test('Renders ListContainer component with items', () => {
  render(<ItemsContainer items={['AnyFirstItem', 'AnySecondItem']} onClick={jest.isMockFunction}/>);
  expect(screen.getByTestId('items-container')).toMatchSnapshot();
});

test('Renders ListContainer component with no items', () => {
  render(<ItemsContainer items={[]} onClick={jest.isMockFunction}/>);
  expect(screen.getByTestId('items-container')).toMatchSnapshot();
});
