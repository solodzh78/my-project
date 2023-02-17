import { buildScssLoader } from './../build/loaders/buildScssLoader';
import { BuildPaths } from './../build/types/config';
import { Configuration } from 'webpack';
import path from 'path';

export default ({ config}: {config:Configuration} ) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildScssLoader(true));

  return config;
}