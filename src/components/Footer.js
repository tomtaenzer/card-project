import React from 'react';
import './Footer.css'
import NewsletterForm from "./NewsletterForm";


export default function Footer(){
    return (
        <footer className="Footer">

             <span>Created with love</span>

            <NewsletterForm className="newsLetterForm"/>
        </footer>
    )
}