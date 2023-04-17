import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicConnectAsyncReducers, ReducersList } from 'shared/lib/DynamicConnectAsyncReducers';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
  getArticleData, getArticleError, getArticleIsLoading,
} from '../../model/selectors/article';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import s from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent }
  from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

const initialReducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, articleId } = props;

  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleIsLoading);
  // const isLoading = true;
  const error = useSelector(getArticleError);
  const articleData = useSelector(getArticleData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case 'CODE':
      return <ArticleCodeBlockComponent block={block} key={block.id} className={s.block} />;
    case 'TEXT':
      return <ArticleTextBlockComponent block={block} key={block.id} className={s.block} />;
    case 'IMAGE':
      return <ArticleImageBlockComponent block={block} key={block.id} className={s.block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ === 'storybook') {
      return;
    }
    dispatch(fetchArticleById(articleId));
  }, [articleId, dispatch]);

  let content;

  if (isLoading) {
    content = (
      <div className={s.isLoading}>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <div className={s.error}>
        <Text
          text={t('article_error_message')}
          align="center"
          variant="error"
        />
      </div>
    );
  } else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar
            size={200}
            src={articleData?.img}
            className={s.avatar}
          />
        </div>
        <Text
          className={s.title}
          title={articleData?.title}
          text={articleData?.subtitle}
          size="size_l"
        />
        <div className={s.articleInfo}>
          <Icon className={s.icon} Svg={EyeIcon} />
          <Text text={String(articleData?.views)} />
        </div>
        <div className={s.articleInfo}>
          <Icon className={s.icon} Svg={CalendarIcon} />
          <Text text={articleData?.createdAt} />
        </div>
        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicConnectAsyncReducers
      stayAfterUnmount={false}
      asyncReducers={initialReducers}
    >
      <div
        data-testid="ArticleDetails"
        className={classNames([s.ArticleDetails, className])}
      >
        {content}
      </div>
    </DynamicConnectAsyncReducers>
  );
});
