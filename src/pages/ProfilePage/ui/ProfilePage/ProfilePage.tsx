import {
  EditableProfileCard, fetchProfileData, profileReducer,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { DynamicConnectAsyncReducers, ReducersList } from 'shared/lib/DynamicConnectAsyncReducers';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicConnectAsyncReducers
      stayAfterUnmount={false}
      asyncReducers={initialReducers}
    >
      <EditableProfileCard />
    </DynamicConnectAsyncReducers>
  );
};
