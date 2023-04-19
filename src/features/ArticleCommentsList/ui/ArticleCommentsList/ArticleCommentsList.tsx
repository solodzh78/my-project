import { FC, memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import s from './ArticleCommentsList.module.scss';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsArticleId/fetchCommentsArticleId';

interface ArticleCommentsListProps {
  className?: string;
  articleId: string;
}

export const ArticleCommentsList: FC<ArticleCommentsListProps> = memo(
  (props: ArticleCommentsListProps) => {
    const { className, articleId } = props;

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    // const { t } = useTranslation();

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

    return (
      <DynamicConnectAsyncReducers asyncReducers={{ articleComments: articleCommentsReducer }}>
        <div
          data-testid="ArticleCommentsList"
          className={classNames([s.ArticleCommentsList, className])}
        >
          <CommentList
            isLoading={isLoading}
            comments={comments}
          />
        </div>
      </DynamicConnectAsyncReducers>
    );
  },
);
