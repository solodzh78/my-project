import { ValueOf } from 'shared/types/ValueOf';

export const articleSortField = {
  VIEWS: 'views',
  CREATED: 'createdAt',
  TITLE: 'title',
} as const;

export type ArticleSortField = ValueOf<typeof articleSortField>
