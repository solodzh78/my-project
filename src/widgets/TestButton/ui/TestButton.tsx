import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton';

import s from './TestButton.module.scss';

interface TestButtonProps {
  className?: string;
}

export const TestButton: FC<TestButtonProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const makeError = () => { setIsError(true); };

  useEffect(() => {
    if (isError) {
      throw Error('I make this Error');
    }
  }, [isError]);

  return (
    <AppButton
      onClick={makeError}
      className={classNames([s.testbutton, className])}
    >
      { t('Создать ошибку') }
    </AppButton>
  );
};
