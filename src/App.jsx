/* eslint react-hooks/exhaustive-deps: off */
import React,{ useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage'

// reactを定義する関数を生成する
const App = () => {

    // 第一変数:stateに使用する変数
    // 第二変数:stateを変更する関数名
    // useStateの引数で初期値を設定できる
    const [num,setNum] = useState(0);
    const [faceShowFlag,setFaceShowFlag] = useState(true);

    /**
     * num更新処理
     */
    const onClickCountUp = () => {
        // 引数に設定したい値をセットする
        setNum(num + 1);
    };

    /**
     * faceShowFlag更新処理
     */
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    }

    // useEffctの第二引数を[]にすると初回のみ実行される
    // useEffctの第二引数を変数にするとその変数変更時にのみ実行される
    useEffect(() => {
        // numが3の倍数の時だけ顔文字を表示する
        if (num > 0) {
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }    
        }
    },[num]);


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
            <br />
            <button onClick = {onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>

            {faceShowFlag && <p>٩( ᐛ )و</p>}
        </>
    );
};

// 他のjsファイルでも利用できるようにする
export default App;