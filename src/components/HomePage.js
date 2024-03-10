import React, { useState } from 'react'
import ChampionCard from './ChampionCard'

export default function HomePage({championsList}) {
    const [categoryFilter, setCategoryFilter] = useState("All") //using this to have a useState feature to filter by team.
    let filteredTeams
    if (categoryFilter === "All") {
        filteredTeams = championsList
    }
    else {
        filteredTeams = championsList.filter(champion => champion.team === categoryFilter)
    }

    return (
        <div>
            <div>
                <button className='btn btn-danger m-3' onClick={() => setCategoryFilter("All")}>All</button>
                <button className='btn btn-danger m-3' onClick={() => setCategoryFilter("Red Bull Racing")}>Red Bull Racing</button>
                <button className='btn btn-danger' onClick={() => setCategoryFilter("Mercedes")}>Mercedes</button>
            </div>
            {filteredTeams.map(c => <ChampionCard champion={c} />)}
        </div>
    )
}
