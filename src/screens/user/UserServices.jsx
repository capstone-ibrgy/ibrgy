import React, { useEffect, useState } from 'react'
import Documents from './Documents'
import { getDocuments, onSnapshot } from '../../api/services'
import { Error, Upcoming } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

const UserServices = () => {

    const [fetchState, setFetchState] = useState(0);
    const [documents, setDocuments] = useState([]);
    const [drop, setDrop] = useState(-1)

    const handleDrop = (i) => {
        if (i === drop) {
            setDrop(-1)
        }
        else {
            setDrop(i)
        }
    }

    const handleClick = (index) => {
        props.setScreen(index)
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
            <h1 className='text-3xl font-bold font-arimo mb-8'>Documents Offered</h1>
            <div className='h-full w-full overflow-auto'>
                {fetchState != 1 ? StateBuilder(fetchState) : documents.map((doc, i) => {
                    return (
                        <Documents docs={doc} />
                    )
                })}
            </div>
        </div>
    )
}

export default UserServices