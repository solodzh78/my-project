import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

// import s from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  label?: string;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, label, readOnly,
  } = props;
  const { t } = useTranslation();

  const options = useMemo<SelectOption<Country>[]>(() => [
    { value: 'ARMENIA', content: t('ARMENIA') },
    { value: 'BELARUS', content: t('BELARUS') },
    { value: 'KAZAKHSTAN', content: t('KAZAKHSTAN') },
    { value: 'RUSSIA', content: t('RUSSIA') },
  ], [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
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
