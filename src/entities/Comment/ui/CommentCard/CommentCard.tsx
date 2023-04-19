import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';

import s from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, isLoading, comment } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        data-testid="CommentCard"
        className={classNames([s.CommentCard, className])}
      >
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={s.username} width={100} height={20} border="5px" />
        </div>
        <Skeleton className={s.text} width="100%" height={50} border="5px" />
      </div>
    );
  }

  return (
    <div
      data-testid="CommentCard"
      className={classNames([s.CommentCard, className])}
    >
      <div className={s.header}>
        <Avatar src={comment?.user.avatar} size={30} />
        <Text className={s.username} title={comment?.user.username} />
      </div>
      <Text className={s.text} text={comment?.text} />
    </div>
  );
});
