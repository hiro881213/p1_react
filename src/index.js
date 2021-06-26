import React from 'react';

// reactでDOM操作をするために利用するライブラリ
import ReactDom from 'react-dom'

import App from './App';

// 表示したい要素：第一引数
// 表示したい箇所：第二引数
ReactDom.render(<App />, document.getElementById('root'));