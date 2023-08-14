import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  test('render', () => {
    ComponentRender(<Drawer>aaa</Drawer>);
    expect(screen.getByTestId('Drawer')).toBeInTheDocument();
  });
});
