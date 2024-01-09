import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import edit from '../../assets/images/Community Logo (19).png'
import doc from '../../assets/images/Community Logo (5).png'
import add from '../../assets/images/22.png'
import { getDocuments, onSnapshot } from '../../api/services';
import { Upcoming, Error } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import Documents from './Documents';
import AddDocuments from './AddDocuments';
import NewDocument from './NewDocument';

const AdminServices = ({ setScreen, setAlert }) => {

  const [height, setHeight] = useState(400)
  const [fetchState, setFetchState] = useState(0);
  const [documents, setDocuments] = useState([]);
  const [added, setAdded] = useState([]);
  const [onAdd, setOnAdd] = useState(false);

  const handleClick = () => {
    setScreen(9)
  }

  useEffect(() => {
    const query = getDocuments();

    try {
      const unsub = onSnapshot(query, snapshot => {
        if (!snapshot) {
          setFetchState(-1)
          return
        }

        if (snapshot.empty) {
          setFetchState(2)
          return
        }

        const docs = snapshot.docs.map((doc) => doc.data());
        setDocuments(docs)
        setFetchState(1)
      })

      return () => {
        unsub()
      }

    } catch (err) {
      console.log(err)
      setFetchState(-1)
    }
  }, []);

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
      <div className={`h-full w-full overflow-auto`}>
        <div className='flex flex-col items-center gap-6'>
          {
            fetchState != 1 ? StateBuilder(`${fetchState}`) :
              documents.map((item, i) => {
                return (
                  <Documents docs={item} />
                )
              })
          }
          {
            added.map((item) => {
              return (
                <NewDocument setAlert={setAlert} cancel={() => { setAdded([]); setOnAdd(false); }} />
              )
            })
          }
          {!onAdd && <div className='flex w-[90%] justify-end'>
            <div
              onClick={() => {
                setAdded([1]);
                setOnAdd(true);
              }}
              className='bg-[#FEC51C] rounded-[20px] p-2 w-16 cursor-pointer shadow-lg'>
              <img src={add} alt="add" className='w-12 h-12' />
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default AdminServices