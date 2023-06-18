import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortField } from 'entities/Article/model/types/ArticleSortField';
import { SortOrder } from 'shared/types/SortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
