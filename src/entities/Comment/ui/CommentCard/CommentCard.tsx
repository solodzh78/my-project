import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePaths } from 'shared/config/routes';
import { HStack, VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';

import s from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap={8}
        data-testid="CommentCard"
        className={classNames([s.CommentCard, className, s.skeleton])}
      >
        <HStack gap={16} max className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={s.username} width={100} height={20} border="5px" />
        </HStack>
        <Skeleton className={s.text} width="100%" height={50} border="5px" />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      gap={8}
      data-testid="CommentCard"
      className={classNames([s.CommentCard, className])}
    >
      <AppLink to={`${RoutePaths.profile}${comment?.user.id}`} className={s.header}>
        <HStack gap={8}>
          <Avatar src={comment?.user.avatar} size={30} />
          <Text title={comment?.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment?.text} />
    </VStack>
  );
});
