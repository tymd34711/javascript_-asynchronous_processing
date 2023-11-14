//　非同期処理を行う関数宣言
const getGitUserName = async () => {
    const message = 'GitのユーザーIDは'
    const url = 'https://api.github.com/users/deatiger'

    const json = await fetch(url)
        .then(res => {
            console.log('これは非同期処理成功時のメッセージです。')
            return res.json()
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        });
    username = json.login
    console.log(message + username)
}

getGitUserName()