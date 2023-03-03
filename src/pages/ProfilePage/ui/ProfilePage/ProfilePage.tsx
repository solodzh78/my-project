import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicConnectAsyncReducers, ReducersList } from 'shared/lib/DynamicConnectAsyncReducers';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicConnectAsyncReducers
      stayAfterUnmount={false}
      asyncReducers={initialReducers}
    >
      <div>{t('PROFILE_PAGE')}</div>
    </DynamicConnectAsyncReducers>
  );
};
