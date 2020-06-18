import React from 'react';
import './Main.css'
import Card from "./Card";


export default function Main(props){
  console.log(props.cardContent);

    return (
        <main className="flex-grow">
           <Card content={props.cardContent} />
        </main>
    )
}