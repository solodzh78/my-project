import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { Currency } from '../../model/types/currency';

// import s from './CurrencySelect.module.scss';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  label?: string;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, label, readOnly,
  } = props;
  const { t } = useTranslation();

  const options = useMemo<SelectOption<Currency>[]>(() => [
    { value: 'RUB', content: t('RUB') },
    { value: 'EUR', content: t('EUR') },
    { value: 'USD', content: t('USD') },
  ], [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      value={value}
      label={label}
      className={classNames([className])}
      options={options}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});
