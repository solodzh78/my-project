import { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames([s.NotificationButton, className])}
      trigger={(
        <Button theme="clear">
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
      direction="down_left"
    >
      <NotificationList className={s.notifications} />
    </Popover>
  );
});
