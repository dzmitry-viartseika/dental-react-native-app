import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { IconButton } from '../IconButton';

const STUB_COLOR = 'black';
const STUB_ICON_NAME = 'call';
const STUB_SIZE = '16px';

describe.skip('<IconButton /> component', () => {
  it('should be rendered with current icon', () => {
    render(<IconButton color={STUB_COLOR} size={STUB_SIZE} iconName={STUB_ICON_NAME} />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeTruthy();
  });
});
