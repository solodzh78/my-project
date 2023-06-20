import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import s from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage: FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
  const { className } = props;

  const { t } = useTranslation('articles');
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page
      data-testid="ArticleEditPage"
      className={classNames([s.ArticleEditPage, className])}
    >
      {isEdit
        ? t('edit_article_with_id') + id
        : t('create_new_article')}
    </Page>
  );
});
