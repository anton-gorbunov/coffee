import React from 'react';
import Menu from '../menu/menu';
import Divider from '../divider/divider';

import './footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Menu classList="footer-menu"/>
                <Divider classList="line line_black"/>
            </div>
        </footer>
    );
};

export default Footer;