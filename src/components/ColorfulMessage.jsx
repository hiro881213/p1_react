import React from 'react';



const ColorfulMessage = (props) => {

    const {color,children} = props;

    // スタイルオブジェクト
    const contentStyle = {
        color: color,
        fontSize: '18px'
    };

    // {props.children}タグの中身を取得する
    return (
        <p style = {contentStyle} >{children}</p>
    );
};

export default ColorfulMessage;