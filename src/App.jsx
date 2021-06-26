import React,{ useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage'

// reactを定義する関数を生成する
const App = () => {

    const onClickCountUp = () => {
        // 引数に設定したい値をセットする
        setNum(num + 1);
    };

    // 第一変数:stateに使用する変数
    // 第二変数:stateを変更する関数名
    // useStateの引数で初期値を設定できる
    const [num,setNum] = useState(0);

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

            <button onClick = {onClickCountUp}>カウントアップ</button>

            <p>{num}</p>
        </>
    );
};

// 他のjsファイルでも利用できるようにする
export default App;