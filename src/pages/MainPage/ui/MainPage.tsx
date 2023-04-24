import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { TestButton } from 'widgets/TestButton';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <Page>{t('Главная')}</Page>
      <TestButton />
    </>
  );
};

export { MainPage };
