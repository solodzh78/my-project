import { StateSchema } from 'app/providers/StoreProvider';
import { VIEW, articleSortField, articleType } from 'entities/Article';

export const getArticlesPageIsLoading = (
  state: StateSchema,
) => state.articlesPage?.isLoading || false;

export const getArticlesPageView = (
  state: StateSchema,
) => state.articlesPage?.view || VIEW.GRID;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited || false;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (
  state: StateSchema,
) => state.articlesPage?.sort ?? articleSortField.CREATED;
export const getArticlesPageType = (
  state: StateSchema,
) => state.articlesPage?.type ?? articleType.ALL;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
