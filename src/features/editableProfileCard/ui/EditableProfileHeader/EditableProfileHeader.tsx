import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';

import s from './EditableProfileHeader.module.scss';

interface EditableProfileHeaderProps {
  readOnly: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  className?: string;
}

export const EditableProfileHeader: FC<EditableProfileHeaderProps> = (props) => {
  const {
    className,
    readOnly,
    onEdit,
    onCancel,
    onSave,
  } = props;
  const { t } = useTranslation('profile');

  return (
    <div className={classNames([s.header, className])}>
      <Text title={t('card_title')} />
      {readOnly
        ? (
          <Button
            className={s.editBtn}
            theme="outline"
            onClick={onEdit}
          >
            {t('edit')}
          </Button>
        )
        : (
          <>
            <Button
              className={s.cancelBtn}
              theme="outline-red"
              onClick={onCancel}
            >
              {t('cancel')}
            </Button>
            <Button
              className={s.saveBtn}
              theme="outline"
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
        )}
    </div>
  );
};
