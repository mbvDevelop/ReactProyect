import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoadmapSection from './RoadmapSection';

describe('<RoadmapSection />', () => {
  test('it should mount', () => {
    render(<RoadmapSection />);
    
    const roadmapSection = screen.getByTestId('RoadmapSection');

    expect(roadmapSection).toBeInTheDocument();
  });
});