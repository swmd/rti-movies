import React from 'react';
import {waitFor, within} from '@testing-library/react-native';

import {HeaderLayout} from './HeaderLayout';
import {renderWithProviders} from '../../test/render';

const Title = 'Test Title';

describe('HeaderLayout component', () => {
  it('should render title correctly', async () => {
    const screen = renderWithProviders(<HeaderLayout title={Title} />);
    await waitFor(async () => {
      const {getByText} = within(await screen.findByTestId('Header-Title'));
      expect(getByText(Title)).toBeDefined();
    });
  });

  it('should render back button', async () => {
    const screen = renderWithProviders(
      <HeaderLayout title={Title} goBack={() => {}} />,
    );
    await waitFor(async () => {
      const backButton = await screen.findByTestId('Btn-Back');
      expect(backButton).toBeDefined();
    });
  });
});
