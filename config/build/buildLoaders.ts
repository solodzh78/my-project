import { RuleSetRule } from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
// import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const assetLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader = buildSvgLoader();

  const sassLoader = buildScssLoader(isDev);

  // const typescriptLoader = buildTypescriptLoader(isDev);

  return [
    assetLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // babelLoader,
    // typescriptLoader,
    sassLoader,
  ];
}
