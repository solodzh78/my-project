import {
  EditableProfileCard, fetchProfileData, profileReducer,
} from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { DynamicConnectAsyncReducers, ReducersList } from 'shared/lib/DynamicConnectAsyncReducers';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page';

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
      <Page>
        <EditableProfileCard />
      </Page>
    </DynamicConnectAsyncReducers>
  );
};
