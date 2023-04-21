import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from './article';
import { Article } from '../types/article';

const articleData: Article = mockedArticle as Article;

describe('getArticleData', () => {
  test('return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        articleData,
      },
    };
    expect(getArticleData(state as StateSchema)).toEqual(articleData);
  });
  test('return profile data with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleData(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleError', () => {
  test('return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateSchema)).toEqual('error');
  });
  test('return profile error with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleError(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleIsLoading', () => {
  test('return profile isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as StateSchema)).toEqual(true);
  });
  test('return profile isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleIsLoading(state as StateSchema)).toEqual(false);
  });
});
