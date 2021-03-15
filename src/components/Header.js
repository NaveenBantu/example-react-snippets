import React from 'react';
import { currentYear } from '../utils/time-utils';

export default function Header() {

    return (
        <div className="pure-g center">
            <div className="pure-u-1">
                <h1>Todos</h1>
                <div>jukia.com - &copy; {currentYear()}</div>
            </div>
        </div>
    );

}