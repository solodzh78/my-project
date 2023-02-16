import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';

describe('AppButton', () => {
  test('render', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('use theme clear', () => {
    render(<AppButton theme="clear">TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
