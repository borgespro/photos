import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import AppBar from './AppBar';

test('should render the component correctly', () => {
  render(<AppBar />)

  fireEvent.click(screen.getByText('Photos'))
});
