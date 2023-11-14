//　非同期処理を行う関数宣言
const getGitUserName = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/deatiger'

        // GitHub APIをTetchメソッドで実行
        fetch(url).then(res => res.json())
            .then(json => {
                console.log('これは非同期処理成功時のメッセージです')
                return resolve(json.login)
            }).catch(error => {
                console.error('これは非同期処理失敗時のメッセージです', error)
                return reject(null)
            })
    })
};

const message = 'GitのユーザーIDは'
getGitUserName().then(username => {
    console.log(message + username)
})
