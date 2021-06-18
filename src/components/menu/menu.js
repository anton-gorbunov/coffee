import React from 'react';
import {NavLink} from 'react-router-dom';

import './menu.scss';
import footerBeansImg from './footer_beans.png';
import headerBeansImg from './header_beans.png';

const Menu = ({classList}) => {
    const beansImg = classList ==='header-menu' ? headerBeansImg : footerBeansImg;
    const linksArr = [
        {to: '/', title: 'Coffee house', img: true},
        {to: '/coffee', title: 'Our coffee'},
        {to: '/pleasure', title: 'For your pleasure'}
    ];
    const links = linksArr.map(item => {
        const {to, title} = item;
        const img = item.img ? <img src={beansImg} alt="beans"/> : null;
        return (
            <li className="menu__item" key={to}>
                <NavLink 
                    className={`menu__link ${classList}__link`} 
                    activeClassName="active"
                    to={to}
                    exact
                >
                    {img}
                    {title}
                </NavLink>
            </li>
        );
    });
    return (
       <div className="container">
            <ul className={`menu ${classList}`}>
               {links}
            </ul>
       </div>
    );
};

export default Menu;