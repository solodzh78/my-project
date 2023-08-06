import {
  FC, Fragment, ReactNode, memo,
} from 'react';
import { Menu } from '@headlessui/react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// eslint-disable-next-line solodzh-eslint-plugin/path-checker
// import { Avatar } from 'shared/ui/Avatar/Avatar';
// import { Button } from 'shared/ui/Button';
import { DropDirection } from 'shared/types/ui';
// eslint-disable-next-line solodzh-eslint-plugin/path-checker
import { AppLink } from 'shared/ui/AppLink';
import s from './DropDown.module.scss';

interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDownItem[];
  trigger?: ReactNode;
  direction?: DropDirection;
  // src?: string;
  // avatar?: ReactNode;
}

const mappedClassesDropDownDirection = {
  up_right: 'optionsUpRight',
  down_right: 'optionsDownRight',
  up_left: 'optionsUpLeft',
  down_left: 'optionsDownLeft',
};

export const DropDown: FC<DropDownProps> = memo((props: DropDownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'down_right',
    // src,
    // avatar,
  } = props;

  // const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames([s.DropDown, className])}>
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      {/* <Menu.Button as={Avatar} src={src} className={s.avatar} /> */}
      <Menu.Items
        className={classNames([s.menu, s[mappedClassesDropDownDirection[direction]]])}
      >
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              type="button"
              className={classNames([s.item], { [s.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={String(item.content)}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item
              key={String(item.content)}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
