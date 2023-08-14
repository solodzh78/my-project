import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { AvatarDropdown } from './AvatarDropdown';

describe('AvatarDropdown', () => {
  test('render', () => {
    ComponentRender(<AvatarDropdown />);
    expect(screen.getByTestId('AvatarDropdown')).toBeInTheDocument();
  });
});
