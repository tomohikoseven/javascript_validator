# Nodev14/Jest/ES6 を babel 不要でテスト実行する

## 参考

- https://jestjs.io/docs/ecmascript-modules
- https://qiita.com/shimataro999/items/8a63ec06f33ccd2ea9ca

## jest をグローバルでなくローカル環境にインストールする。

```
npm install --save-dev jest
```

## package.json

type を追加し、テスト実行は script から実行するようにする。

```
{
  "scripts": {
    "test": "node node_modules/jest/bin/jest.js"
  },
  …
  "type": "module"
  …
}
```

## jest.config.js

```
export default {
  testEnvironment: "jest-environment-node",
  transform: {},
};
```

##
