import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  memo,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value = '',
    onChange,
    type = 'text',
    placeholder,
    autoFocus = false,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  const inputCaretValue = (caretPosition: number): string => (
    Array(caretPosition).fill(' ').join('').concat('_')
  );

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value?.length !== undefined) {
      onChange?.(value);
    }
  };
  const onFocus = () => { setIsFocused(true); };
  const onBlur = () => { setIsFocused(false); };
  const onSelect: ReactEventHandler<HTMLInputElement> = (e) => {
    if (!e.currentTarget.selectionEnd) {
      return;
    }
    setCaretPosition(e.currentTarget.selectionEnd);
  };

  useEffect(() => {
    if (!autoFocus) return;
    ref.current?.focus();
  }, [autoFocus]);

  return (
    <div className={classNames([s.inputWrapper, className])}>
      {placeholder && (
        <div className={s.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={s.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={s.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          ref={ref}
          {...otherProps}
        />
        {isFocused && (
          <input
            className={s.caretInput}
            value={inputCaretValue(caretPosition)}
            readOnly
            tabIndex={-1}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
