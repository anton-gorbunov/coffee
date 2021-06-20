import React from 'react';

import './divider.scss';
import blackBeans from './beans/black_beans.png';
import whiteBeans from './beans/white_beans.png';


const Divider = ({classList}) => {
    const imgUrl = classList === 'line line_black' ? blackBeans : whiteBeans;
    return (
        <div className="divider">
            <div className={classList}></div>
            <img src={imgUrl} alt="beans"/>
            <div className={classList}></div>
        </div>
    );
};

export default Divider;