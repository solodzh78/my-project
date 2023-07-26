import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView, VIEW } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = memo(
  (props: ArticleListItemProps) => {
    const {
      className,
      view = VIEW.GRID,
    } = props;

    if (view === VIEW.LIST) {
      return (
        <div
          className={classNames([s.ArticleListItem, s[view], className])}
        >
          <Card className={s.card}>
            <div className={s.header}>
              <Skeleton className={s.avatar} width={30} height={30} border="50%" />
              <Skeleton className={s.username} width={100} height={16} />
              <Skeleton className={s.date} width={88} height={16} />
            </div>
            <Skeleton className={s.title} width={250} height={24} />
            {/* <Skeleton className={s.types} width="50%" height={24} /> */}
            <Skeleton className={s.img} height={200} />
            {/* <Skeleton className={s.textBlock} height={250} /> */}
            <div className={s.footer}>
              <Skeleton className={s.button} width={160} height={36} />
              <Skeleton className={s.views} width={60} height={16} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames([s.ArticleListItem, s[view], className])}
      >
        <Card
          className={s.card}
        >
          <div className={s.imageWrapper}>
            <Skeleton className={s.img} width={200} height={200} />
          </div>
          <div className={s.infoWrapper}>
            <Skeleton className={s.types} width={130} height={16} />
          </div>
          <Skeleton className={s.title} width={150} height={16} />
        </Card>
      </div>
    );
  },
);
