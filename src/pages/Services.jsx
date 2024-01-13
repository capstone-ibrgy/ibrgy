import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import data from '../assets/data/content.json'
import { Error, Upcoming } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import Documents from '../screens/user/Documents';

const Services = ({ profile, setScreen, documents, demo }) => {

  const navigate = useNavigate();

  const handleRequest = (index) => {
    if (!profile) return navigate('/login');

    setScreen(index + 8)
  }

  const StateBuilder = (state) => {

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
        text: 'Loading documents...'
      }
    }

    return (
      <div className='flex flex-col h-full justify-center items-center gap-4 text-[#FEC51C]'>
        {states[`${state}`].icon}
        <p className='text-sm text-[#1F2F3D]'>{states[`${state}`].text}</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <h1 className='text-3xl font-bold font-arimo mt-2 mb-4'>Documents Offered</h1>
      <div className={`w-full overflow-auto`}>
        <div className='flex flex-col items-center gap-6'>
          {
            !demo ?
              documents['fetchState'] != 1 ? StateBuilder(`${documents['fetchState']}`) :
                documents['documents'].map((item, i) => {
                  return (
                    <Documents onClick={() => {
                      handleRequest(i);
                    }} docs={item} />
                  )
                })
              :
              data['documents'].map((item, i) => {
                return (
                  <Documents onClick={() => {
                    handleRequest(i);
                  }} docs={item} />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Services