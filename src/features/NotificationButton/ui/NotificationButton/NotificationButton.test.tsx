import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { NotificationButton } from './NotificationButton';

describe('NotificationButton', () => {
  test('render', () => {
    ComponentRender(<NotificationButton />);
    expect(screen.getByTestId('NotificationButton')).toBeInTheDocument();
  });
});
