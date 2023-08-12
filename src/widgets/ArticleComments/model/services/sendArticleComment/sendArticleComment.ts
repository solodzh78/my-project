import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const sendArticleComment = createAsyncThunk<
  Comment,
  {
    text: string | undefined;
    articleId: string;
  },
  ThunkConfig<string>
      >(
        'addNewComment/sendArticleComment',
        async ({ text, articleId }, thunkAPI) => {
          const {
            getState, dispatch, extra, rejectWithValue,
          } = thunkAPI;

          const user = getUserAuthData(getState());

          if (!user || !articleId || !text) {
            return rejectWithValue('No data');
          }

          const newComment = {
            userId: user.id,
            articleId,
            text,
          };

          try {
            const response = await extra.api.post<Comment>('/comments', newComment);

            if (!response.data) {
              throw new Error();
            }

            dispatch(fetchCommentsByArticleId(articleId));
            return response.data;
          } catch (error) {
            return rejectWithValue('error');
          }
        },
      );
