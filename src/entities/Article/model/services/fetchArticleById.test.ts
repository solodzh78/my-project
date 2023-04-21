import { AxiosError } from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { DeepPartial } from 'shared/types/DeepPartial';
import { mockedArticle } from 'shared/mocked/mockedArticle';
import { fetchArticleById } from './fetchArticleById';
import { Article } from '../types/article';

const articleData: Article = mockedArticle as Article;

describe('fetchArticleById', () => {
  test('fetch article successful', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));
    const result = await thunk.callThunk('1');
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleData);
  });

  test('fetch article failed with 403 status', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    const err: DeepPartial<AxiosError> = {
      response: {
        status: 403,
        data: {
          message: 'Error with status 403',
        },
      },
      isAxiosError: true,
    };
    thunk.api.get.mockRejectedValueOnce(err);
    const result = await thunk.callThunk('1');
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Error with status 403');
  });

  test('fetch article failed with Network Error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    const err = new Error('Network Error');
    thunk.api.get.mockRejectedValueOnce(err);
    const result = await thunk.callThunk('1');
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Network Error');
  });

  test('fetch article failed with Unknown Error', async () => {
    const responseFromServer = {};
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.reject(responseFromServer));
    const result = await thunk.callThunk('1');
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Неизвестная ошибка');
  });
});
