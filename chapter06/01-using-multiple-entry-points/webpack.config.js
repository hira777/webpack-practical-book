// Node.js に組み込まれているモジュール。出力先などの指定をするために利用する。
const path = require('path');

module.exports = {
  // モード
  mode: 'development',
  // エントリーポイント
  entry: {
    app: './src/js/app.js',
    search: './src/js/search.js',
  },
  // 出力の設定
  output: {
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    // `__dirname + public`のように書くと、OS によって
    // パスが異なってしまうことがあるので、必ず`path`モジュールを利用する。
    path: path.resolve(__dirname, 'public'),
    // 出力するファイル名
    // [name] には entry に指定した名前が入る
    // このサンプルでは、entry に app と search を指定しているため、
    // app.bundle.js と search.bundle.js が出力される
    filename: '[name].bundle.js',
  },
};
