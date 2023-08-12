import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import { RemoveAttributesPlugin } from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps): RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          },
        ],
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx,
          },
        ],
        '@babel/plugin-transform-runtime',
        isTsx && [
          RemoveAttributesPlugin,
          {
            props: ['data-testid'],
          },
        ],
        isDev && 'react-refresh/babel',
      ].filter(Boolean),
    },
  },
});
