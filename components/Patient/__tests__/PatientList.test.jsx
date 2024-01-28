import React from 'react';
import { render, screen } from '@testing-library/react-native';
import PatientList from '../PatientList';

const mockTitle = 'Test Title'
const mockItems = [
  {
    id: 1,
    userInfo: {
      avatar: 'https://example.com/avatar1.jpg',
      fullName: 'John Doe',
    },
    visitReason: 'Regular checkup',
    timeVisit: '10:00 AM',
    active: true,
  },
];

test('renders PatientList component with title and items', () => {
  render(<PatientList title={mockTitle} items={mockItems} />);

  const groupTitleElement = screen.getByText('Test Title');
  expect(groupTitleElement).toBeTruthy();

  mockItems.forEach((item) => {
    const fullNameElement = screen.getByText(item.userInfo.fullName);
    expect(fullNameElement).toBeTruthy();

    const reasonTextElement = screen.getByText(item.visitReason);
    expect(reasonTextElement).toBeTruthy();

    const timeGroupElement = screen.getByText(item.timeVisit);
    expect(timeGroupElement).toBeTruthy();
  });
});