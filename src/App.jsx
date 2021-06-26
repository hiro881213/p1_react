import React from 'react';

// reactを定義する関数を生成する
const App = () => {

    // Jsx記法：JavaScriptの中でreturnし、HTMLを記載していくこと
    // returnするHTMLのタグは一つのタグで囲まないといけないというルールがある
    // <>(<React.Fragment>)で囲むことで余計なタグを設定しなくて良くなる
    return(
        <>
            <h1>こんにちは！</h1>
            <p>お元気ですか？</p>
        </>
    );
};

// 他のjsファイルでも利用できるようにする
export default App;