import { useTranslation } from 'react-i18next';
import { TestButton } from 'widgets/TestButton';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <div>{t('Главная')}</div>
      <TestButton />
    </>
  );
};

export default MainPage;
