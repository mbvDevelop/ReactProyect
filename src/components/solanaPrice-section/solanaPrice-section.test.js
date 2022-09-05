import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SolanaPriceSection from './SolanaPriceSection';

describe('<SolanaPriceSection />', () => {
  test('it should mount', () => {
    render(<SolanaPriceSection />);
    
    const solanaPriceSection = screen.getByTestId('SolanaPriceSection');

    expect(solanaPriceSection).toBeInTheDocument();
  });
});