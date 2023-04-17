import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { <FTName> } from './<FTName>';

describe('<FTName>', () => {
  test('render', () => {
    ComponentRender(<<FTName> />);
    expect(screen.getByTestId('<FTName>')).toBeInTheDocument();
  });
});
