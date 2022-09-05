import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UtilitiesSection from './UtilitiesSection';

describe('<UtilitiesSection />', () => {
  test('it should mount', () => {
    render(<UtilitiesSection />);
    
    const utilitiesSection = screen.getByTestId('UtilitiesSection');

    expect(utilitiesSection).toBeInTheDocument();
  });
});