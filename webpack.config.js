// Режим сборки development или production
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Опции webpack
let config = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'), // Главный файл приложения
  },
  output: {
    path: path.resolve(__dirname, './dist'), // Куда и как делать сборку
    filename: '[name].js',
    clean: true, // Очистить .dist от предыдущей сборки
  },
  plugins: [
    new MiniCssExtractPlugin(), // Сборка стилей в отдельный файл
    new HtmlWebPackPlugin({
      // Создание dist/index.html с подключенной сборкой
      template: './index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js'], // Расширение по умолчанию, если не указано в import
  },
  module: {
    rules: [
      // Транспиляция JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      // Возможность подключать css как модули, чтобы попали в сборку
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          {
            loader: 'css-loader',
            options: { url: true, import: true },
          },
        ],
      },
    ],
  },
};

// Локальный сервер для отладки
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: path.join(__dirname, 'dist'),
    port: 8010,
    historyApiFallback: true,
  };
}

module.exports = config;
