import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { NotificationItem } from './NotificationItem';

const item = {
  id: '1',
  title: 'title',
  description: 'string',
  userId: 'string',
};

describe('NotificationItem', () => {
  test('render', () => {
    ComponentRender(<NotificationItem item={item} />);
    expect(screen.getByTestId('NotificationItem')).toBeInTheDocument();
  });
});
