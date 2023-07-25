import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
  const { className, short = false } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames([s.langSwitcher, className])}
      onClick={toggleLanguage}
      theme="clear"
    >
      {/* i18next-extract-disable-next-line */}
      {t(short ? 'Язык сокращенно' : 'Язык')}
    </Button>
  );
});
