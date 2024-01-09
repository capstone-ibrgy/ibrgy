import React, { useEffect, useState } from 'react'
import add from '../../assets/images/Community Logo (20).png'
import request from '../../assets/images/21.png'
import flag from '../../assets/images/Community Logo (10).png'
import { getAllRequestForms, onSnapshot, Timestamp } from '../../api/services'
import { format } from 'date-fns'
import { CircularProgress } from '@mui/material';
import { Upcoming, Error } from '@mui/icons-material';

function AdminDashboard({ setScreen, documents }) {
    const icons = [add, request];
    const options = ['POST DOCUMENT', 'VIEW REQUESTS']

    const [entries, setEntries] = useState([])
    const [fetchState, setFetchState] = useState(0)
    const status = ["TO PROCESS", "FOR PICK-UP", "RELEASED", "DENIED"]

    useEffect(() => {

        const query = getAllRequestForms()

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

                const forms = snapshot.docs.map((doc) => {
                    const { lastname, firstname, mi } = doc.data()["form"]["profile"];

                    return {
                        id: doc.id,
                        data: doc.data(),
                        name: firstname + " " + mi + " " + lastname,
                    };
                });

                const group = forms.reduce((group, form) => {
                    const { pick_up } = form.data.form;
                    group[pick_up['seconds']] = group[pick_up['seconds']] ?? [];
                    group[pick_up['seconds']].push(form);
                    return group;
                }, {});

                setEntries(group)
                setFetchState(1)
            })

            return () => {
                unsub()
            }

        } catch {
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
                text: 'Loading entries...'
            }
        }

        return (
            <div className='flex flex-col h-full justify-center items-center gap-4 text-white'>
                {states[`${state}`].icon}
                <p className='text-sm'>{states[`${state}`].text}</p>
            </div>
        )
    }

    const getDocumentName = (form) => {
        let name = "";
        documents["documents"].map((item) => {
            if (item.id === form["data"]["formType"]) {
                name = item["name"];
            }
        });

        return name;
    };

    return (
        <>
            <h1 className='py-4 text-3xl font-bold'>Welcome back, <span className='text-[#1B75BC]'>Administrator</span></h1> {/* replaced {props.profile.firstname} with "Administrator" */}
            <div className='w-full h-[82%] flex flex-row gap-5'>
                <div className='flex-1 '>
                    <div className='flex flex-col h-full gap-4'>
                        <div className='flex flex-row h-[60%] gap-4'>
                            {[0, 1].map((i) => {
                                return (
                                    <div
                                        onClick={() => { setScreen(i + 2) }}
                                        key={i}
                                        className='cursor-pointer bg-[#FEC51C] pt-2 h-full w-full rounded-[20px]'>
                                        <div className='relative w-full flex flex-col justify-center items-center rounded-[20px] h-full bg-[#1F2F3D]'>
                                            <img src={icons[i]} alt='doc' className='mb-12 w-40 h-40' />
                                            <div className='absolute bottom-0 flex w-full h-12 bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                                                <h1 className='font-bold text-lg'>{options[i]}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex flex-row h-[40%]'>
                            <div className='relative flex justify-center flex-1 h-full rounded-[20px] bg-[#1F2F3D] items-center'>
                                <div className='absolute left-0 flex w-[25%] h-full bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                                    <img src={flag} className='w-24 h-24' />
                                </div>
                                <div className='flex flex-col text-white'>
                                    <h1 className='font-bold text-2xl '>THE BARANGAY</h1>
                                    <ul className='list-disc ml-8'>
                                        <li>Functional Departments</li>
                                        <li>Frontline Services Offered</li>
                                        <li>Steps in Procuring Documents</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[30%] h-full bg-[#FEC51C] rounded-[20px]'>
                    <div className='h-12 flex flex-row px-5 items-center'>
                        <p className='font-bold pr-2'>Show</p>
                        <select name="show" id="show" className='bg-[#FEC51C] border-2 border-[#1F2F3D]'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <p className='font-bold pl-2'>entries</p>
                    </div>
                    <div className='relative flex flex-col w-full h-full bg-[#1F2F3D] rounded-[20px] overflow-hidden'>
                        {fetchState != 1 ? StateBuilder(fetchState) : (
                            <div className='w-full h-[85%] text-white overflow-auto'>
                                <div className='flex flex-col w-full h-full'>
                                    {
                                        Object.keys(entries).map((date, i) => {
                                            return (
                                                <div key={`en#${i}`} className='pb-4 py-2 px-6 border-b'>
                                                    <h1 className='py-2 text-sm font-bold'>{
                                                        format(new Timestamp(date, 0).toDate(), 'eeee, MMMM d, yyyy')
                                                    }</h1>
                                                    {
                                                        entries[date].map((form, i) => {
                                                            return (
                                                                <>
                                                                    <h1 className='text-sm font-bold'>{status[form['data'].status]}</h1>
                                                                    <ul key={`li#${i}`} className='px-4 list-disc list-inside'>
                                                                        <li className='text-sm'>{`${getDocumentName(form)} - `}
                                                                            <span className='italic font-light'>{form.name}</span></li>
                                                                    </ul>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>)}
                        <h1 className='font-bold text-lg absolute bottom-0 w-full py-2 bg-[#FEC51C] rounded-[20px] text-center align-middle'>
                            Calendar
                        </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDashboard