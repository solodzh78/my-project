import { StateSchema } from 'app/providers/StoreProvider';
import { VIEW } from 'entities/Article';

export const getArticlesPageIsLoading = (
  state: StateSchema,
) => state.articlesPage?.isLoading || false;

export const getArticlesPageView = (
  state: StateSchema,
) => state.articlesPage?.view || VIEW.TILE;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited || false;