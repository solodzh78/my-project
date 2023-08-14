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
import popupStyles from '../../../../styles/popup.module.scss';

import { mappedClassesPopupDirection } from '../../../../styles/consts';

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
}

export const DropDown: FC<DropDownProps> = memo((props: DropDownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'down_right',
  } = props;

  // const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames([popupStyles.popup, className])}>
      <Menu.Button className={popupStyles.btn}>{trigger}</Menu.Button>
      <Menu.Items
        className={classNames([s.menu, mappedClassesPopupDirection[direction]])}
      >
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              type="button"
              className={classNames([s.item], { [popupStyles.active]: active })}
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
