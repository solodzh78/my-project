import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Text } from 'shared/ui/Text/Text';
// import { ArticleCommentsList } from 'features/ArticleCommentsList';
// import { AddNewComment } from 'features/AddNewComment';
import { ArticleComments } from 'widgets/ArticleComments';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const { id } = useParams();

  if (!id) {
    return (
      <div className={classNames([s.ArticleDetailsPage, className])}>
        {t('article_details_page_not_found')}
      </div>
    );
  }

  return (
    <div className={classNames([s.ArticleDetailsPage, className])}>
      {t('article_details_page')}
      {id && (
        <>
          <ArticleDetails articleId={id} />
          <ArticleComments articleId={id} />
        </>
      )}
      {/* <Text className={s.commentTitle} title={t('comments')} />
      <AddNewComment />
      <ArticleCommentsList articleId={id} /> */}
    </div>
  );
};

export { ArticleDetailsPage };
