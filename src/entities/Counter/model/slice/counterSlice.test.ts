import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('test increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('test decrement', () => {
    const state = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('test empty state', () => {
    const state: CounterSchema = undefined;
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 });
  });
});
