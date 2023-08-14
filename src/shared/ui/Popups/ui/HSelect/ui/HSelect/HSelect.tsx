import { Fragment, useMemo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import CheckIcon from 'shared/assets/icons/check.svg';
import { DropDirection } from 'shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button';
import s from './HSelect.module.scss';

export interface HSelectItem<T extends string, R = string> {
  id: T;
  content?: R;
  disabled?: boolean;
}

interface HSelectProps<T extends string> {
  items: HSelectItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  label?: string;
  direction?: DropDirection;
}

const mappedClassesListboxDirection = {
  up_right: 'optionsUpRight',
  down_right: 'optionsDownRight',
  up_left: 'optionsUpLeft',
  down_left: 'optionsDownLeft',
};

export const HSelect = <T extends string>(props: HSelectProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readOnly,
    label,
    direction = 'down_right',
  } = props;

  const normalizedItems = useMemo(() => ((items: HSelectItem<T>[]) => {
    if (!items) return undefined;

    const obj = { ids: [] as T[], entities: {} as Record<T, HSelectItem<T>> };

    items.forEach((item) => {
      obj.ids.push(item.id);
      obj.entities[item.id] = item;
    });

    return obj;
  })(items), [items]);
  // console.log('normalizedItems: ', normalizedItems);

  return (
    <Listbox
      className={classNames([s.HSelect, className], { [s.borderless]: readOnly })}
      as="div"
      value={value}
      onChange={onChange}
      disabled={readOnly}
      data-testid="HSelect"
    >
      <HStack gap={4}>
        {label && <Listbox.Label>{label}</Listbox.Label>}
        <div className={s.wrapper}>
          <Listbox.Button className={s.buttonWrapper} as="div">
            <Button
              theme="outline"
              className={classNames([s.button], { [s.disabledBtn]: readOnly })}
            >
              {value ? normalizedItems?.entities[value].content : defaultValue}
            </Button>
          </Listbox.Button>
          <Listbox.Options
            className={classNames([s.items, s[mappedClassesListboxDirection[direction]]])}
          >
            {items?.map((item) => (
              <Listbox.Option
                as={Fragment}
                key={item.id}
                value={item.id}
                disabled={item.disabled}
              >
                {({ active, selected }) => (
                  <li
                    className={
                      classNames(
                        [s.item],
                        {
                          [s.active]: active,
                          [s.disabled]: false,
                        },
                      )
                    }
                  >
                    <HStack gap={4} align="start">
                      {selected && <CheckIcon className={s.checkIcon} />}
                      {item && item.content}
                    </HStack>
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </HStack>
    </Listbox>
  );
};
