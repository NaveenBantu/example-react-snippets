import React from 'react';
import { currentYear } from '../utils/time-utils';

export default function Header() {

    return (
        <>
            <div>
                <h1>Todos</h1>
                <div>jukia.com - &copy; {currentYear()}</div>
            </div>
            <hr/>
        </>
    );

}