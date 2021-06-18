import React from 'react';
import Menu from '../menu/menu';

import './footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Menu classList="footer-menu"/>
                <div className="divider">
                        <div className="line line_black"></div>
                        <img src="icons/beans/black_beans.png" alt="beans"/>
                        <div className="line line_black"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;