import { useTranslation } from 'react-i18next';

import s from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');

  return (
    <div className={s.ArticlesPage}>{t('articles_page')}</div>
  );
};

export { ArticlesPage };
