// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');

module.exports = {
  // モード
  mode: 'development',
  // エントリーポイント
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    // `__dirname + public`のように書くと、OS によって
    // パスが異なってしまうことがあるので、必ず`path`モジュールを利用する。
    path: path.resolve(__dirname, 'public'),
    // 出力するファイル名
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/js'),
        // 利用するローダー
        use: 'babel-loader',
      },
    ],
  },
};
