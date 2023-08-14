import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HSelect, HSelectItem } from 'shared/ui/Popups/ui/HSelect';
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

  const options = useMemo<HSelectItem<Country>[]>(() => [
    { id: 'ARMENIA', content: t('ARMENIA') },
    { id: 'BELARUS', content: t('BELARUS') },
    { id: 'KAZAKHSTAN', content: t('KAZAKHSTAN') },
    { id: 'RUSSIA', content: t('RUSSIA') },
  ], [t]);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <HSelect
      value={value}
      label={label && (`${label}>`)}
      className={classNames([className])}
      items={options}
      onChange={onChangeHandler}
      readOnly={readOnly}
      direction="up_right"
    />
  );
});
