import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import './header.scss';

const Header: FC = () => {
    return(
        <header>
            <Link to='/'>筋トレコード</Link>
            <ul>
                <li><Link to='auth'>ログイン</Link></li>
            </ul>
        </header>
    )
}

export default Header;