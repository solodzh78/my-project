import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileDate';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  dataEdit: undefined,
  isLoading: false,
  readOnly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    cancelEdit: (state) => {
      state.data = state.dataEdit;
      state.readOnly = true;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.dataEdit = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.dataEdit = action.payload;
      state.readOnly = true;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },

});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
