import { ChangeEventHandler, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Select.module.scss';

export interface SelectOption<T extends string, R = string> {
  value?: T;
  content?: R;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  options?: SelectOption<T>[];
  readOnly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    value,
    options,
    readOnly,
    onChange,
  } = props;

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange?.(e.target.value as T);
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
};
