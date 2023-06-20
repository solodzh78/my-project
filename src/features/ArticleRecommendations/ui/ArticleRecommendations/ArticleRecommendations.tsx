import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import s from './ArticleRecommendations.module.scss';
import {
  articleRecommendationsReducer, getArticleRecommendations,
} from '../../model/slices/articleRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/articleRecommendation';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations';

interface ArticleRecommendationsProps {
  className?: string;
  articleId: string;
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(
  (props: ArticleRecommendationsProps) => {
    const { className, articleId } = props;

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isLoading = useSelector(getArticleRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    const { t } = useTranslation('articles');

    useInitialEffect(() => dispatch(fetchArticleRecommendations(articleId)));

    return (
      <DynamicConnectAsyncReducers
        asyncReducers={
          {
            articleRecommendations: articleRecommendationsReducer,
          }
        }
      >
        <div
          data-testid="ArticleCommentsList"
          className={classNames([s.ArticleRecommendations, className])}
        >
          <Text size="size_l" className={s.ArticleRecommendations} title={t('recommend')} />
        </div>
        <ArticleList
          className={s.recommendationsList}
          articles={recommendations}
          isLoading={isLoading}
          target="_blank"
        />
      </DynamicConnectAsyncReducers>
    );
  },
);
