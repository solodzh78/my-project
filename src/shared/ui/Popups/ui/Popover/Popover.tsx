import { FC, ReactNode, memo } from 'react';
import { Popover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';
import { DropDirection } from '../../../../types/ui';
import { mappedClassesPopupDirection } from '../../styles/consts';

interface PopoverProps {
  className?: string;
  trigger?: ReactNode;
  direction?: DropDirection;
  children?: ReactNode;
}

const HPopover: FC<PopoverProps> = memo((props: PopoverProps) => {
  const {
    className,
    direction = 'down_right',
    trigger,
    children,
  } = props;
  return (
    <Popover className={classNames([popupStyles.popup, s.Popover, className])}>
      <Popover.Button as="div" className={popupStyles.btn}>
        {trigger}
      </Popover.Button>

      <Popover.Panel
        className={classNames([s.panel, mappedClassesPopupDirection[direction]])}
      >
        {children}
      </Popover.Panel>
    </Popover>
  );
});

export { HPopover as Popover };
