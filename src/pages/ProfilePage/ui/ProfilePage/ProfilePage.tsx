import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { DynamicConnectAsyncReducers, ReducersList } from 'shared/lib/DynamicConnectAsyncReducers';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicConnectAsyncReducers
      stayAfterUnmount={false}
      asyncReducers={initialReducers}
    >
      <ProfileCard />
    </DynamicConnectAsyncReducers>
  );
};
