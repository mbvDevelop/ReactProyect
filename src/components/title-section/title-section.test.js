import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TitleSection from './TitleSection';

describe('<TitleSection />', () => {
  test('it should mount', () => {
    render(<TitleSection />);
    
    const titleSection = screen.getByTestId('TitleSection');

    expect(titleSection).toBeInTheDocument();
  });
});