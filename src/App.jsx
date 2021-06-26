import React from 'react';
import ColorfulMessage from './components/ColorfulMessage'

// reactを定義する関数を生成する
const App = () => {

    const onClickButton = () => alert();

    // Jsx記法：JavaScriptの中でreturnし、HTMLを記載していくこと
    // returnするHTMLのタグは一つのタグで囲まないといけないというルールがある
    // <>(<React.Fragment>)で囲むことで余計なタグを設定しなくて良くなる
    return(
        /* オブジェクトとしてスタイルを書いていく */
        /* {}でJavaScriptのコードを利用できる */
        <>
            <h1 style = {{color :  'red'}}>こんにちは！</h1>
            <ColorfulMessage color = "blue">
                お元気ですか？
            </ColorfulMessage>
            <ColorfulMessage color = "pink">
                元気です！
            </ColorfulMessage>

            <button onClick = {onClickButton}>ボタン</button>
        </>
    );
};

// 他のjsファイルでも利用できるようにする
export default App;