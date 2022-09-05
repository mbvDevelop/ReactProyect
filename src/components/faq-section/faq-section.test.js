import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FaqSection from './FaqSection';

describe('<FaqSection />', () => {
  test('it should mount', () => {
    render(<FaqSection />);
    
    const faqSection = screen.getByTestId('FaqSection');

    expect(faqSection).toBeInTheDocument();
  });
});