import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData } from '../../model/selectors';
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
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  return (
    <HStack max justify="between" className={classNames([s.header, className])}>
      <Text title={t('card_title')} />
      {canEdit && (
        <div className={s.btnsWrapper}>
          {readOnly
            ? (
              <Button
                className={s.editBtn}
                theme="outline"
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('edit')}
              </Button>
            )
            : (
              <HStack gap={16}>
                <Button
                  className={s.cancelBtn}
                  theme="outline-red"
                  onClick={onCancel}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('cancel')}
                </Button>
                <Button
                  className={s.saveBtn}
                  theme="outline"
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('save')}
                </Button>
              </HStack>
            )}
        </div>
      )}
    </HStack>
  );
};
