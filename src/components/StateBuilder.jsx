import React from 'react'
import { CircularProgress } from '@mui/material';
import { Upcoming, Error } from '@mui/icons-material';

function StateBuilder({ state, color }) {

    const states = {
        "2": {
            icon: <Upcoming />,
            text: 'No entries'
        },
        "-1": {
            icon: <Error />,
            text: 'Something went wrong.'
        },
        "0": {
            icon: <CircularProgress />,
            text: 'Loading entries...'
        }
    }

    return (
        <div className={`flex flex-col h-full justify-center items-center gap-4 ${color}`}>
            {states[`${state}`].icon}
            <p className='text-sm'>{states[`${state}`].text}</p>
        </div>
    )
}

export default StateBuilder