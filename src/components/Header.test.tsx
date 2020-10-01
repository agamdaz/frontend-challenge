import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header'

test('Renders Header component', () => {
  render(<Header buttonLabel="AnyButtonLabel" inputPlaceholder="AnyPlaceholder" onClick={() => jest.isMockFunction}/>);
  expect(screen.getByTestId('app-header')).toMatchSnapshot();
});
