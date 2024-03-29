import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleComments } from 'widgets/ArticleComments';
import { Page } from 'widgets/Page';
import { ArticleRecommendations } from 'features/ArticleRecommendations';
import { VStack } from 'shared/ui/Stack';
import s from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

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
    <Page className={classNames([s.ArticleDetailsPage, className])}>
      {/* {t('article_details_page')} */}
      {id && (
        <VStack gap={16}>
          <ArticleDetailsPageHeader />
          <ArticleDetails articleId={id} />
          <ArticleComments articleId={id} />
          <ArticleRecommendations />
        </VStack>
      )}
    </Page>
  );
};

export { ArticleDetailsPage };
