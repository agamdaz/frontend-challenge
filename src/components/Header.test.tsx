import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header'

test('Renders Header component with clear active', () => {
  render(<Header
    buttonLabel="AnyButtonLabel"
    inputPlaceholder="AnyPlaceholder"
    clearButtonActive={false}
    clearButtonClick={() => jest.isMockFunction}
    filterType={jest.isMockFunction}
  />);
  expect(screen.getByTestId('app-header')).toMatchSnapshot();
});

test('Renders Header component with clear disabled', () => {
  render(<Header
    buttonLabel="AnyButtonLabel"
    inputPlaceholder="AnyPlaceholder"
    clearButtonActive={true}
    clearButtonClick={() => jest.isMockFunction}
    filterType={jest.isMockFunction}
  />);
  expect(screen.getByTestId('app-header')).toMatchSnapshot();
});
