import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArtSection from './ArtSection';

describe('<ArtSection />', () => {
  test('it should mount', () => {
    render(<ArtSection />);
    
    const artSection = screen.getByTestId('ArtSection');

    expect(artSection).toBeInTheDocument();
  });
});