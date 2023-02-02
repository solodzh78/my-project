import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: options.isDev
              ? '[path].[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    typescriptLoader,
    sassLoader
  ]
}