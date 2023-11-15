※練習のため新しいブランチを切ってます
# javascript_asynchronous_processing
## 非同期処理とは
- 実行完了を待たずに並行して次の処理を行う
- 通信が発生する処理で起きる
    - Web APIをたたく
    - データベースへクエリを投げる

## 非同期処理のメリット・デメリット
- メリット
  - ユーザーを待たせない
- デメリット
  - 制御が難しい
- デメリットの対処法対処法
  - 非同期処理の実行完了を制御する

## callback関数
- 関数に渡された関数をcallback関数という(jsでは関数はオブジェクト)
- 
## Promise
- Promiseの状態
  - pending: 初期状態
  - fulfilled: 処理が成功して完了した状態
  - rejected: 処理が失敗して完了した状態
- コンストラクタ
```
const promise = new Promise()
```

## asyc/await
- 非同期処理を伴う関数定義にasyncをつける
- 非同期処理を伴う関数実行時にawaitをつける
- awaitはasync付きの関数内でしか使えない

## 参考
- https://www.youtube.com/watch?v=Vhnz1V-v1cU