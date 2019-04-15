# React + Typescript

## Make Product
```bash
$ create-react-app --scripts-version=react-scripts-ts {app-name}
```

## StateとPropsの違い
* **State**
  *  そのコンポーネントが持っている状態
  *  mutable data (**可変のデータ**)
  *  maintained by component (コンポーネントによって保持)
  *  can change it (**変更可**)
  *  should be considered private (プライベートであるべき)
  *  this.setState()を使って更新
*  **Props**
   *  immutable data (**不変のデータ**)
   *  passed in from parent (親から渡される)
   *  can't change it (**変更不可**)
   *  can be defaulted & validated (デフォルト値の設定と検証が可能)


## Routerを使ってみる
```bash
$ yarn add react-router-dom @types/react-router-dom
```

## Reduxを使ってみる
```
$ yarn add redux
```