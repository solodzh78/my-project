import { ChangeEventHandler, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Select.module.scss';

export interface SelectOption<T = string, R = string> {
  value?: T;
  content?: R;
}

interface SelectProps {
  className?: string;
  label?: string;
  value?: string;
  options?: SelectOption[];
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    value,
    options,
    readOnly,
    onChange,
  } = props;

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => (
    options?.map(({ value, content }) => (
      <option
        className={s.option}
        value={value}
        key={value}
      >
        {content || value}
      </option>
    ))), [options]);

  const mods = useMemo<Mods>(() => ({
    [s.readOnly]: readOnly,
  }), [readOnly]);

  return (
    <div className={classNames([s.Select, className])}>
      {label && <span className={s.label}>{`${label}>`}</span>}
      <select
        value={value}
        className={classNames([s.select], mods)}
        disabled={readOnly}
        onChange={onChangeHandler}
      >
        {options && optionsList}
      </select>
    </div>
  );
});
