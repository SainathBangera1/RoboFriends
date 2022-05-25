import React from 'react';
import Card from '../components/Card';

const CardList = ({robots})=>{
    if(!robots){
        throw new Error('NOOOOO!!!');
    }
    const cardArray = robots.map((item)=>{
        return <Card key={item.id} id={item.id} name={item.name} username={item.username} email={item.email} />
    })
    return (
        <div>{cardArray}</div>
    )
}

export default CardList;