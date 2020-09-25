# 『webpack 入門』

[『webpack 入門』](https://zenn.dev/soarflat/books/a673b77fce39082e2324)のサンプルコード集です。

## 3. webpack を利用してみる

- [chapter03/01-getting-started-webpack](chapter03/01-getting-started-webpack): webpack を最小構成で利用しているサンプルコード

## 4. ローダー

- [chapter04/01-using-babel-loader](chapter04/01-using-babel-loader): babel-loader を利用して ES2015 以降のコードをトランスパイルするサンプルコード
- [chapter04/02-using-sass-loader-css-loader-style-loader](chapter04/02-using-sass-loader-css-loader-style-loader): sass-loader と css-loader と style-loader を利用して、Sass ファイルをバンドルしているサンプルコード
- [chapter04/03-using-post-css-loader](chapter04/03-using-post-css-loader): post-css-loader と Autoprefixer を利用して、ベンダープレフィックスを追加した CSS を出力しているサンプルコード
- [chapter04/04-using-file-loader](chapter04/04-using-file-loader): file-loader を利用して画像を出力し、その画像を利用している CSS に記述されている画像パスを書き換えているサンプルコード

## 5. プラグイン

- [chapter05/01-using-clean-webpack-plugin](chapter05/01-using-clean-webpack-plugin): clean-webpack-plugin を利用して、指定したディレクトリ内のファイルを削除するサンプルコード
- [chapter05/02-using-webpack-merge](chapter05/02-using-webpack-merge): webpack-merge を利用して、webpack の設定ファイルを開発用と本番用で分割しているサンプルコード
- [chapter05/03-using-mini-css-extract-plugin](chapter05/03-using-mini-css-extract-plugin):mini-css-extract-plugin を利用して、バンドルされる CSS を別の CSS ファイルに抽出しているサンプルコード

## 6. webpack の様々な機能を理解して使いこなす

- [chapter06/01-using-multiple-entry-points](chapter06/01-using-multiple-entry-points):　複数のエントリーポイントからバンドルを出力するサンプルコード
- [chapter06/02-using-watch-mode](chapter06/02-using-watch-mode): watch モードを有効にし、ファイルの変更を検知して再ビルドするサンプルコード
- [chapter06/03-using-webpack-dev-server](chapter06/03-using-webpack-dev-server): 開発用サーバーである webpack-dev-server のライブリロード機能を利用したサンプルコード
- [chapter06/04-using-source-map](chapter06/04-using-source-map): ソースマップを生成するサンプルコード

## 7. 最適化

- [chapter07/01-using-tree-shaking](chapter07/01-using-tree-shaking): Tree Shaking を利用して不要なコードを削除するサンプルコード
- [chapter07/02-using-split-chunks-plugin](chapter07/02-using-split-chunks-plugin): SplitChunksPlugin を利用して共通チャンク分割したファイルを出力し、全体のファイルサイズを削減するサンプルコード
