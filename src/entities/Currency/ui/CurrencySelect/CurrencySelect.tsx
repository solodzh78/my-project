import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HSelect, HSelectItem } from 'shared/ui/HSelect';
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

  const options = useMemo<HSelectItem<Currency>[]>(() => [
    { id: 'RUB', content: t('RUB') },
    { id: 'EUR', content: t('EUR') },
    { id: 'USD', content: t('USD') },
  ], [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <HSelect
      value={value}
      label={label && (`${label}>`)}
      className={classNames([className])}
      items={options}
      onChange={onChangeHandler}
      readOnly={readOnly}
      direction="up"
    />
  );
});
