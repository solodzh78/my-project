import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import s from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { VIEW } from '../../model/const/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = VIEW.GRID,
    target,
    virtualized = true,
  } = props;

  const { t } = useTranslation('articles');

  const isList = view === VIEW.LIST;

  const itemsPerRow = isList ? 1 : 3;

  const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({
    index, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
          className={s.card}
        />,
      );
    }

    return (
      <div
        className={s.row}
        key={key}
        style={style}
      >
        {items}
      </div>
    );
  };

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
    <WindowScroller
      scrollElement={document.getElementById('page') as Element}
    >
      {({
        width,
        height,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          className={classNames([s.ArticleList, s[view], className])}
          // @ts-ignore
          ref={registerChild}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isList ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 70 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((article) => (
              <ArticleListItem
                article={article}
                view={view}
                target={target}
                key={article.id}
                className={s.card}
              />
            ))
          )}
          { isLoading && getSkeleton(view)}
        </div>
      )}
    </WindowScroller>
  );
});
