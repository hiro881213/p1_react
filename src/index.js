import React from 'react';

// reactでDOM操作をするために利用するライブラリ
import ReactDom from 'react-dom'

// reactを定義する関数を生成する
const App = () => {
    // Jsx記法：JavaScriptの中でreturnし、HTMLを記載していくこと
    // returnするHTMLのタグは一つのタグで囲まないといけないというルールがある
    // <>(<React.Fragment>)で囲むことで余計なタグを設定しなくて良くなる
    return (
        <>
            <h1>こんにちは！</h1>
            <p>お元気ですか？</p>
        </>
    );
};

// 表示したい要素：第一引数
// 表示したい箇所：第二引数
ReactDom.render(<App />, document.getElementById('root'));