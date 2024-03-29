import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { RoutePaths } from 'shared/config/routes';
import { AppLink } from 'shared/ui/AppLink';
import { HStack, VStack } from 'shared/ui/Stack';
import {
  Article, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import s from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { VIEW } from '../../model/const/article';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view = VIEW.GRID,
    target,
  } = props;

  const { t } = useTranslation('articles');

  const types = <Text className={s.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Text className={s.views} text={String(article.views)} />
      <Icon className={s.icon} Svg={EyeIcon} />
    </>
  );
  const date = <Text className={s.date} text={article.createdAt} />;
  const articleImage = (
    <HStack
      max
      style={{ height: 250 }}
    >
      <img className={s.img} src={article.img} alt={article.title} />
    </HStack>
  );

  if (view === VIEW.LIST) {
    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;
    return (
      <div
        data-testid="ArticleListItem"
        className={classNames([s.ArticleListItem, s[view], className])}
      >
        <Card className={s.card}>
          <HStack justify="between">
            <HStack>
              <Avatar className={s.avatar} size={30} src={article.user.avatar} />
              <Text className={s.username} text={article.user.username} />
            </HStack>
            {date}
          </HStack>
          <Text className={s.title} title={article.title} />
          <VStack max gap={16}>
            {types}
            {articleImage}
            {textBlock && (
              <ArticleTextBlockComponent className={s.textBlock} block={textBlock} />
            )}
          </VStack>
          <div className={s.footer}>
            <AppLink to={RoutePaths.article + article.id} target={target}>
              <Button className={s.button} theme="outline">
                {t('readMore')}
              </Button>
            </AppLink>
            {views}
          </div>

        </Card>
      </div>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      className={classNames([s.ArticleListItem, s[VIEW.GRID], className])}
      to={RoutePaths.article + article.id}
      target={target}
    >
      <Card className={s.card}>
        <div className={s.imageWrapper}>
          {articleImage}
          {date}
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={s.title} title={article.title} />
      </Card>
    </AppLink>
  );
});
