import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter" className={className}>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="counter-inc-btn" onClick={increment}>
        { t('increment') }
      </Button>
      <Button data-testid="counter-dec-btn" onClick={decrement}>
        { t('decrement') }
      </Button>
    </div>
  );
};
