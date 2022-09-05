import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterSection from './FooterSection';

describe('<FooterSection />', () => {
  test('it should mount', () => {
    render(<FooterSection />);
    
    const footerSection = screen.getByTestId('FooterSection');

    expect(footerSection).toBeInTheDocument();
  });
});