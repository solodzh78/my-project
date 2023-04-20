import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import s from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('articles');

  if (isLoading) {
    return (
      <div className={classNames([s.CommentList, className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div
      data-testid="CommentList"
      className={classNames([s.CommentList, className])}
    >
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            className={s.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text className={s.comment} text={t('nocomments')} />}
    </div>
  );
});
