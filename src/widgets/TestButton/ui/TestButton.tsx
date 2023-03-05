import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

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
    <Button
      onClick={makeError}
      className={classNames([s.testButton, className])}
    >
      { t('Создать ошибку') }
    </Button>
  );
};
