import React from 'react';
import './error.scss';
import errorImg from './error.jpg';

const Error = () => {
    return (
       <div className="container">
            <div className="error">Something goes wrong...</div>
            <img src={errorImg} alt="error" className="error__img"/>
       </div>
    );
};

export default Error;