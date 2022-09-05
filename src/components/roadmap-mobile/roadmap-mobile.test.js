import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoadmapMobile from './RoadmapMobile';

describe('<RoadmapMobile />', () => {
  test('it should mount', () => {
    render(<RoadmapMobile />);
    
    const roadmapMobile = screen.getByTestId('RoadmapMobile');

    expect(roadmapMobile).toBeInTheDocument();
  });
});