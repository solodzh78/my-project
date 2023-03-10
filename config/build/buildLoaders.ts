import { RuleSetRule } from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const babelLoader = buildBabelLoader(isDev);

  const assetLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader = buildSvgLoader();

  const sassLoader = buildScssLoader(isDev);

  const typescriptLoader = buildTypescriptLoader(isDev);

  return [
    assetLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    sassLoader,
  ];
}
