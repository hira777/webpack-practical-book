# 開発用サーバー

開発用サーバーである webpack-dev-server のライブリロード機能を利用したサンプルコード。

## 動作環境

- Node.js: v12.18.4
- npm: v6.14.8

## セットアップ

このディレクトリ上で以下のコマンドを実行してください。

```
npm ci
```

## 使い方

以下のコマンドを実行すれば、サーバーが起動してブラウザで`public/index.html`が開かれます。

```
npm run start
```

ファイルを更新したらブラウザがリロードされますので、`src/js/app.js`を更新すればリロードされます。

また、以下のコマンドを実行すれば、webpack が実行されてバンドルされたファイルが出力されます。

```
npm run build
```
