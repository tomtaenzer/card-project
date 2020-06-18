import React from 'react';
import './Header.css'

export default function Header(props){
    return (
        <header className="Header">
            <h1>
                Two and a half {props.title}
            </h1>
        </header>
    )
}