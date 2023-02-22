import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render', () => {
    ComponentRender(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('test initial state value', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('test increment  button', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('counter-inc-btn');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });
  test('test decrement button', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const decrementBtn = screen.getByTestId('counter-dec-btn');
    userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
