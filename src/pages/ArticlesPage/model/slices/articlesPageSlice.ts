import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  Article, VIEW, ArticleView, articleType, ArticleType,
} from 'entities/Article';
import { ArticleSortField, articleSortField } from 'entities/Article/model/types/ArticleSortField';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  view: VIEW.GRID,
  page: 1,
  limit: 9,
  hasMore: true,
  _inited: false,
  sort: articleSortField.CREATED,
  search: '',
  order: 'asc',
  type: articleType.ALL,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      state.limit = action.payload === VIEW.LIST ? 4 : 9;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setInited: (state) => {
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticlesList.pending,
      (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      },
    );
    builder.addCase(
      fetchArticlesList.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.hasMore = Number(action.payload?.length) >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      },
    );
    builder.addCase(
      fetchArticlesList.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice;
