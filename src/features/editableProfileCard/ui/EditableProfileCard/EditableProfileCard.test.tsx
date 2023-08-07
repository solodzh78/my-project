import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Profile } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 45,
  currency: 'RUB',
  country: 'RUSSIA',
  city: 'Kaliningrad',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readOnly: true,
      data: profile,
      dataEdit: profile,
    },
    user: {
      authData: { id: '1', username: 'admin123' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('edit mode on', async () => {
    ComponentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('cancel get back old values', async () => {
    ComponentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue(profile.firstName);
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue(profile.lastName);
  });

  test('check validation error', async () => {
    ComponentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('if have not validations errors, must be send PUT request to server', async () => {
    const mockPutRequest = jest.spyOn($api, 'put');
    ComponentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutRequest).toBeCalled();
  });
});
