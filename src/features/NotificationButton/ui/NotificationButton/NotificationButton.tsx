import { memo, useCallback, useState } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import { Drawer } from 'shared/ui/Drawer';

import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDevice();

  const onOpenDrawer = useCallback(() => {
    if (isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button theme="clear" onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    isMobile
      ? (
        <>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            {isOpen && <NotificationList />}
          </Drawer>
        </>
      )
      : (
        <Popover
          className={classNames([s.NotificationButton, className])}
          trigger={trigger}
          direction="down_left"
        >
          <NotificationList className={s.notifications} />
        </Popover>
      )
  );
});
