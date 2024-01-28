import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SectionTitle from '../SectionTitle';

const mockTitle = 'Mocked title';

describe('<SectionTitle /> component', () => {
    it('should be rendered with current title', () => {
        render(<SectionTitle title={mockTitle} />);

        const titleElement = screen.getByText(mockTitle);
        expect(titleElement).toBeTruthy();
    })
})