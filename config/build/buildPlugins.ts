import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// eslint-disable-next-line max-len
export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const {
    paths, isDev, bundleAnalyze, apiUrl, project,
  } = options;
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (bundleAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
