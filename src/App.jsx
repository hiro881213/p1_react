import React from 'react';

// reactを定義する関数を生成する
const App = () => {

    const onClickButton = () => alert();

    // スタイルオブジェクト
    const contentStyle = {
        color: 'blue',
        fontSize: '18px'
    };

    // Jsx記法：JavaScriptの中でreturnし、HTMLを記載していくこと
    // returnするHTMLのタグは一つのタグで囲まないといけないというルールがある
    // <>(<React.Fragment>)で囲むことで余計なタグを設定しなくて良くなる
    return(
        /* オブジェクトとしてスタイルを書いていく */
        /* {}でJavaScriptのコードを利用できる */
        <>
            <h1 style = {{color :  'red'}}>こんにちは！</h1>
            <p style = {contentStyle} >お元気ですか？</p>
            <button onClick = {onClickButton}>ボタン</button>
        </>
    );
};

// 他のjsファイルでも利用できるようにする
export default App;