import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './[FTName].module.scss';

interface <FTName>Props {
  className?: string;
}

export const <FTName>: FC<<FTName>Props> = memo((props: <FTName>Props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div
      data-testid="<FTName>"
      className={classNames([s.<FTName>, className])}
    >

    </div>
  );
});
