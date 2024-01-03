import React, { useEffect, useState } from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Close } from '@mui/icons-material'
import { format } from 'date-fns';
import { Backdrop } from '@mui/material';

const CedulaUpdate = ({ form, close }) => {

    let info_left = [
        { label: "First Name", current: form.form.profile.firstname },
        { label: "Middle Initial", current: form.form.profile.mi },
        { label: "Last Name", current: form.form.profile.lastname },
        { label: "Civil Status", current: form.form.profile.civilstatus },
        { label: "Gender", current: form.form.profile.gender },
        { label: "Place of Birth", current: form.form.profile.address },
        { label: "Date of Birth", current: format(form.form.profile.birthdate.toDate(), 'MMMM dd, yyyy') },
    ]
    let info_right = [
        { label: "Address", current: form.form.profile.address },
        { label: "Height (in cm)", current: form.form.height },
        { label: "Weight (in kg)", current: form.form.weight },
        { label: "Occupation", current: form.form.profile.occupation },
        { label: "Monthly Income", current: form.form.income },
    ]

    let info = { label: "Preferred Pick-up Date", current: format(form.form.pick_up.toDate(), 'MMMM dd, yyyy') };

    const [startDate, setStartDate] = useState();
    const [showDocs, setShowDocs] = useState(false);

    return (
        <div className='h-screen w-screen absolute bg-[#FEC51C] bg-opacity-50 font-arimo flex items-center'>
            <div className='h-[85%] w-full overflow-auto'>
                <div className='flex justify-center'>
                    <div className='bg-[#1F2F3D] h-full w-[70%] rounded-[20px] pb-4'>
                        <div className='bg-white flex flex-col rounded-t-[20px]'>
                            <div className='h-[55%] w-full bg-[#1F2F3D] flex justify-center py-2 rounded-[20px]'>
                                <div className='h-full w-[90%] flex flex-row items-center text-white'>
                                    <img src={doc} alt="" className='w-16 h-16' />
                                    <div className='text-2xl font-bold mx-4 w-full'>Community Tax Certificate (Cedula)</div>
                                    <Close
                                        onClick={() => { close() }}
                                        className='cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex flex-row w-full gap-12 px-12 py-8'>
                                <div className='flex flex-col w-full gap-2'>
                                    {info_left.map((info_left) => {
                                        return (
                                            <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                                <label>{info_left.label}</label>
                                                <p type="text" placeholder={info_left.current} className='border-2 border-[#1F2F3D] text-[#1B75BC] rounded-lg p-2'>{info_left.current}</p>
                                            </div>
                                        )
                                    })}
                                    <div className='flex h-full w-full items-end pt-4'>
                                        <div
                                            onClick={() => {
                                                setShowDocs(true);
                                            }}
                                            className='text-[#1F2F3D] cursor-pointer font-semibold border-2 border-[#1F2F3D] p-4 rounded-lg w-full'>
                                            <h1>View Zone Clearance and/or Other Documents</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full gap-2'>
                                    {info_right.map((info_right) => {
                                        return (
                                            <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                                <label>{info_right.label}</label>
                                                <p type="text" placeholder={info_right.current} className='border-2 border-[#1F2F3D] text-[#1B75BC] rounded-lg p-2'>{info_right.current}</p>
                                            </div>
                                        )
                                    })}
                                    <div className='flex flex-col h-full w-full'>
                                        <div className='flex h-full items-end'>
                                            <div className='flex flex-col w-full gap-2'>
                                                <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                                    <label>{info.label}</label>
                                                    <p type="text" placeholder={info.current} className='border-2 border-[#1F2F3D] text-[#1B75BC] rounded-lg p-2'>{info.current}</p>
                                                </div>
                                                <div className='flex flex-row w-full gap-4 font-bold text-[#1F2F3D] pt-4'>
                                                    <button className='border-2 border-[#FEC51C] bg-[#FEC51C] w-full p-4 rounded-lg drop-shadow-lg'>Confirm Request</button>
                                                    <button className='border-2 border-[#FEC51C] bg-white w-full p-4 rounded-lg drop-shadow-lg'>Deny Request</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showDocs}
                onClick={() => { setShowDocs(false) }}
            >
                <div className='p-4 w-[50%] h-full'>
                    <img src={form.form.uploaded_docs} alt='docs' className='w-full h-full' />
                </div>

            </Backdrop>
        </div>
    )
}

export default CedulaUpdate