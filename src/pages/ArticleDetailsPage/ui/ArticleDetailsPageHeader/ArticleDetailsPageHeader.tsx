// import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoutePaths } from 'shared/config/routes';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
// import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';
import { AppLink } from 'shared/ui/AppLink';
// import { useMemo } from 'react';
import s from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  // const navigate = useNavigate();
  // const userData = useSelector(getUserAuthData);
  const article = useSelector(getArticleData);
  const canEdit = useSelector(getCanEditArticle);
  // const canEdit = useMemo(() => {
  //   if (!article || !userData) {
  //     return false;
  //   }
  //   return article.user?.id === userData?.id;
  // }, [article, userData]);
  // const canEdit = true;

  // const onBackToList = useCallback(() => {
  //   navigate(RoutePaths.articles);
  // }, [navigate]);

  return (
    <div className={classNames([s.ArticleDetailsPageHeader, className])}>
      <AppLink to={RoutePaths.articles}>
        <Button
          theme="outline"
          // onClick={onBackToList}
        >
          {t('backToList')}
        </Button>
      </AppLink>
      {canEdit && (
        <AppLink className={s.editBtn} to={`${RoutePaths.article}${article?.id}/edit`}>
          <Button
            theme="outline"
            // onClick={onBackToList}
          >
            {t('edit')}
          </Button>
        </AppLink>
      )}
    </div>
  );
};
