import { RuleSetRule } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export const buildTypescriptLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.tsx?$/,
  use: {
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
      }),
      transpileOnly: isDev,
    },
  },
  exclude: /node_modules/,
});
