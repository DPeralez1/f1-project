import React from 'react'
import {CardImg} from 'reactstrap'

export default function ChampionCard({champion}) {
  return (
    <div className='bg-light border p-4 m-2'>
        <h4>{champion.team}</h4>
        <p>{champion.driver}</p>
        <p>{champion.year}</p>
      </div>
  )
}
