import { useTranslation } from 'react-i18next';

import s from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div className={s.ArticleDetailsPage}>{t('article_details_page')}</div>
  );
};

export { ArticleDetailsPage };
