/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('adminPanel')}
    </Page>
  );
};

export { AdminPanelPage };
