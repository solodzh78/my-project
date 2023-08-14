import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { NotificationList } from './NotificationList';

describe('NotificationList', () => {
  test('render', () => {
    ComponentRender(<NotificationList />);
    expect(screen.getByTestId('NotificationList')).toBeInTheDocument();
  });
});
