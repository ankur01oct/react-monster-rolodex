import React from 'react';
import './card-list.component.css'
import {Card} from '../card/card.component'

export const CardList = (props) => {
    return <div className ='card-list'>
     {
        props.monsters.map(monster => {
          return(
          <h1 key={monster.id}>
            <Card key = {monster.id} monster = {monster}></Card>
         </h1>
         )
        })
      }
    </div>
}