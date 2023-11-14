//　非同期処理を行う関数宣言
const getGitUserName = () => {
    const url = 'https://api.github.com/users/deatiger'

    // GitHub APIをTetchメソッドで実行
    fetch(url).then(res => res.json())
        .then(json => {
            console.log('これは非同期処理成功時のメッセージです')
            return json.login
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです', error)
            return null
        })
};

const message = 'GitのユーザーIDは'
const username = getGitUserName()
console.log(message + username)

