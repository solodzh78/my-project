import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AddNewComment } from 'features/AddNewComment';
import { fetchCommentsByArticleId } from 'features/ArticleCommentsList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments';
import s from './ArticleComments.module.scss';

interface ArticleCommentsProps {
  className?: string;
  articleId: string;
}

export const ArticleComments: FC<ArticleCommentsProps> = memo((props: ArticleCommentsProps) => {
  const { className, articleId } = props;

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const sendArticleCommentHandler = (text: string | undefined) => {
    dispatch(sendArticleComment({ text, articleId }));
  };

  const { t } = useTranslation('articles');

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

  return (
    <DynamicConnectAsyncReducers asyncReducers={{ articleComments: articleCommentsReducer }}>
      <div
        data-testid="ArticleComments"
        className={classNames([s.ArticleComments, className])}
      >
        <Text className={s.commentTitle} title={t('comments')} />
        <AddNewComment onSendComment={sendArticleCommentHandler} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicConnectAsyncReducers>
  );
});
