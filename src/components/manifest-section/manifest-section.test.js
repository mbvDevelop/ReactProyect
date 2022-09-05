import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ManifestSection from './ManifestSection';

describe('<ManifestSection />', () => {
  test('it should mount', () => {
    render(<ManifestSection />);
    
    const manifestSection = screen.getByTestId('ManifestSection');

    expect(manifestSection).toBeInTheDocument();
  });
});