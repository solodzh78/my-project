import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { AddNewComment } from 'features/AddNewComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments';

interface ArticleCommentsProps {
  articleId: string;
}

export const ArticleComments: FC<ArticleCommentsProps> = memo((props: ArticleCommentsProps) => {
  const { articleId } = props;

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
      <VStack
        gap={16}
        max
        data-testid="ArticleComments"
      >
        <Text title={t('comments')} />
        <AddNewComment onSendComment={sendArticleCommentHandler} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </VStack>
    </DynamicConnectAsyncReducers>
  );
});
