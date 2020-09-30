import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from "./Item";

test('Renders ListItem component', () => {
  render(<ListItem label="AnyItemLabel"/>);
  expect(screen.getByTestId('list-item')).toMatchSnapshot();
});
