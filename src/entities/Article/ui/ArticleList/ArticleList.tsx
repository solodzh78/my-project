import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
    />
  );

  if (isLoading) {
    return (
      <div className={classNames([s.ArticleList, s[view], className])}>
        {new Array(view === VIEW.LIST ? 3 : 9)
          .fill(<ArticleListItemSkeleton view={view} />)}
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
    </div>
  );
});
