import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import s from './ArticleList.module.scss';
import { Article, ArticleView, VIEW } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = VIEW.TILE,
  } = props;

  const { t } = useTranslation('articles');

  const getSkeleton = (view: ArticleView) => (
    <div className={classNames([s.ArticleList, s[view], className])}>
      {new Array(view === VIEW.LIST ? 4 : 9)
        .fill(0)
        .map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ArticleListItemSkeleton view={view} key={index} />
        ))}
    </div>
  );

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div
        data-testid="ArticleList"
        className={classNames([s.ArticleList, s[view], className])}
      >
        <Text size="size_l" title={t('articles_not_founded')} />
      </div>
    );
  }

  return (
    <div
      data-testid="ArticleList"
      className={classNames([s.ArticleList, s[view], className])}
    >
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      { isLoading && getSkeleton(view)}
    </div>
  );
});
