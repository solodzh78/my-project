import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import s from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card
      data-testid="NotificationItem"
      variant="outlined"
      className={classNames([s.NotificationItem, className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a
        className={s.link}
        target="_blank"
        rel="noreferrer"
        href={item.href}
      >
        {content}
      </a>
    );
  }

  return content;
});
