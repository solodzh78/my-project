import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('render', () => {
    ComponentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    ComponentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
