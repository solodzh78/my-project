import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Text } from 'shared/ui/Text/Text';
// import { ArticleCommentsList } from 'features/ArticleCommentsList';
// import { AddNewComment } from 'features/AddNewComment';
import { ArticleComments } from 'widgets/ArticleComments';
import { Button } from 'shared/ui/Button';
import { useCallback } from 'react';
import { RoutePaths } from 'shared/config/routes';
import { Page } from 'widgets/Page/Page';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const { id } = useParams();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);

  if (!id) {
    return (
      <div className={classNames([s.ArticleDetailsPage, className])}>
        {t('article_details_page_not_found')}
      </div>
    );
  }

  return (
    <Page className={classNames([s.ArticleDetailsPage, className])}>
      {/* {t('article_details_page')} */}
      {id && (
        <>
          <Button
            theme="outline"
            onClick={onBackToList}
          >
            {t('backToList')}
          </Button>
          <ArticleDetails articleId={id} />
          <ArticleComments articleId={id} />
        </>
      )}
      {/* <Text className={s.commentTitle} title={t('comments')} />
      <AddNewComment />
      <ArticleCommentsList articleId={id} /> */}
    </Page>
  );
};

export { ArticleDetailsPage };
