// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');
// output.path に指定したディレクトリ内のファイルを削除するプラグイン
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
  // プラグインの設定
  plugins: [
    // クリーンアップをする
    // このサンプルでは、output.path に public/js を指定しているため、
    // public/js ディレクトリ内のファイルが削除されてからファイルが出力される。
    new CleanWebpackPlugin(),
  ],
};
