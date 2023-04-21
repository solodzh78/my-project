import { User } from 'entities/User';
import { ValueOf } from 'shared/types/ValueOf';

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title?: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface Article {
  id: string;
  title: string;
  userId: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  articleData: Article
}

export const VIEW = {
  LIST: 'list',
  TILE: 'tile',
} as const;

export type ArticleView = ValueOf<typeof VIEW>
