const path = require('path'); //помогает работать с путями
const HtmlWebpackPlugin = require('html-webpack-plugin'); //подключаем для работы с html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //подлкючаем плагин для очистки папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //подключаем плагин при помощи которого сможем выносить css в свой самостиятельный файл
const ESLintPlugin = require('eslint-webpack-plugin'); //подключаем eslint
const PrettierPlugin = require('prettier-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: { // подключение сервера для работы
    port: 4200,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, 'public') // указываем путь до папки со статическими файлами
  }
};

const esLintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['ts', 'js', 'tsx'] })];

module.exports = ({ develop }) => ({ //экспортируем модуль с настройками, представляет собой обычный объект
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false, 

  entry: {
    app: './src/app.ts', // точка входа нашего приложения //ПОТОМ ПОМЕНЯТЬ НА TS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   },
  output: { // куда произойдёт итоговый билд нашего проекта
    path: path.resolve(__dirname, 'dist'), //в корне папки с проектом создаёт папку dist
    filename: '[name].[contenthash].js', //итоговое название скомпилированного js файла, который будет помощён в папку dist
    assetModuleFilename: 'assets/[hash][ext]', // указываем, куда после сборки будут помещены файлы assets
  },
  module: {
    rules: [ // сюда мы добавляем лоадеры
      { // лоадер, который работает с typescript
        test: /\.(ts|tsx)$/, // определяет какие файлы будут обрабатываться данным лоадером
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, // выбирает все файлы, которые относятся к assets
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.mp3$/,
        use: 'file-loader'
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx',], // указываем какие типы расширений файлов нам не обязательно нужно будет указывать при работе с import, export
  },
  plugins: [ // сюда будут добавляться все используемые нами плагины
    new HtmlWebpackPlugin({ // внутри прописываем настройки для работы плагина с html
      template: './src/index.html', //указываем путь до изначального файла с html
    }),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // позволит не удалять файлы, которые не изменились
    ...esLintPlugin(develop),
    new PrettierPlugin({
      printWidth: 100,               
      tabWidth: 2,                  
      useTabs: false,               
      semi: true,                   
      encoding: 'utf-8',
      singleQuote: true,
      trailingComma: "all",        
      extensions: [ ".js", ".ts", ".tsx" ] 
    }),
  ],
  ...devServer(develop),
  performance: {
    hints: false
  }
});