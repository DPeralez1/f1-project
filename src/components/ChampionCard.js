import React from 'react'

export default function ChampionCard(props) {
  return (
    <div className='bg-light border p-4 m-2'>
        <h4>{props.champion.team}</h4>
        <p>{props.champion.driver}</p>
        <p>{props.champion.year}</p>
      </div>
  )
}
