import React, { useEffect, useState } from 'react'
import { getRequestForms, onSnapshot } from '../../api/services'
import { format } from 'data-fns'
import document from '../../assets/images/Community Logo (5).png'
import info from '../../assets/images/Community Logo (13).png'
import flag from '../../assets/images/d.png'
import phone from '../../assets/images/g.png'

function UserDashboard({ profile }) {
    const icons = [info, flag, phone];
    const options = ['About Us', "Citizen's Charter", 'Contact Us']

    const [entries, setEntries] = useState([])

    useEffect(() => {

        const query = getRequestForms(profile.userId)

        const unsub = onSnapshot(query, snapshot => {
            console.log(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })

        return () => {
            unsub()
        }
    }, []);

    return (
        <>
            <h1 className='py-4 text-3xl font-bold'>Welcome back, <span className='text-[#1B75BC]'>{profile.firstname}</span></h1>
            <div className='w-full h-[82%] flex flex-row gap-5'>
                <div className='flex-1 '>
                    <div className='flex flex-col h-full gap-4'>
                        <div className='bg-[#FEC51C] pt-2 h-[60%] w-full rounded-[20px]'>
                            <div className='relative w-full flex flex-col justify-center items-center rounded-[20px] h-full bg-[#1F2F3D]'>
                                <img src={document} alt='doc' className='mb-12 w-40 h-40' />
                                <div className='absolute bottom-0 flex w-full h-12 bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                                    <h1 className='font-bold text-lg'>VIEW DOCUMENT LIST</h1>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row h-[40%] gap-4'>
                            {[0, 1, 2].map((i) => {
                                return (<div key={i} className='relative flex justify-center flex-1 h-full rounded-[20px] bg-[#1F2F3D] items-center'>
                                    <img src={icons[i]} className='mb-10 w-16 h-16' />
                                    <div className='absolute bottom-0 flex w-full h-10 bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                                        <h1 className='font-bold text-md'>{options[i]}</h1>
                                    </div>
                                </div>)
                            })}
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
                    <div className='relative flex flex-col w-full h-full bg-[#1F2F3D] rounded-[20px]'>
                        <div className='flex-1 bg-white mb-16 m-4 px-2'>
                            <h1 class>DATE</h1>
                            <h1>FOR PICK-UP</h1>
                        </div>
                        <div className='absolute bottom-0 flex w-full h-12 bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                            <h1 className='font-bold text-lg'>Calendar</h1>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserDashboard