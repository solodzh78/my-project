import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleRecommendationSchema } from '../types/ArticleRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = recommendationsAdapter.getInitialState<ArticleRecommendationSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommendations || recommendationsAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (
      state,
      action,
    ) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },

});

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
