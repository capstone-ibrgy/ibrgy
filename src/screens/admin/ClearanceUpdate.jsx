import React, { useState }  from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ClearanceUpdate = () => {

    let info_left = [
        {label: "First Name", current: "Precious Hope"},
        {label: "Middle Initial", current: "T"},
        {label: "Last Name", current: "Jumuad"},
        {label: "Nickname", current: "Single"},
        {label: "Address", current: "M.L. Quezon St., Zone 3, Lower Jasaan, Jasaan 9003, Misamis Oriental"},
        {label: "Date of Birth", current: "August 27, 2002"},
        {label: "Place of Birth", current: "Jasaan Municipal Hospital, Lower Jasaan, Jasaan, Misamis Oriental"},
    ]
    let info_right = [
        
        {label: "Gender", current: "Female"},
        {label: "Civil Status", current: "Single"},
        {label: "Nationality", current: "Filipino"},
        {label: "Purpose", current: "School Requirements"},
        {label: "Findings", current: "Qualified"},
    ]

    let info = {label: "Preferred Pick-up Date", current: "July 3, 2023"};

    const [startDate, setStartDate] = useState();
    

  return (
    <div className='h-screen w-screen absolute bg-[#FEC51C] bg-opacity-50 font-arimo flex items-center'>
        <div className='h-[85%] w-full overflow-auto'>
            <div className='flex justify-center'>
                <div className='bg-[#1F2F3D] h-full w-[70%] rounded-[20px] pb-4'>
                    <div className='bg-white flex flex-col rounded-t-[20px]'>
                        <div className='h-[55%] w-full bg-[#1F2F3D] flex justify-center py-2 rounded-[20px]'>
                            <div className='h-full w-[90%] flex flex-row items-center text-white'>
                                <img src={doc} alt="" className='w-16 h-16'/>
                                <div className='text-2xl font-bold mx-4 w-full'>Barangay Certificate</div>
                                <div className='h-12 flex flex-row px-5 items-center'>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row w-full gap-12 px-12 pb-8'>
                            <div className='flex flex-col w-full gap-2'>
                                {info_left.map((info_left) => {
                                    return(
                                        <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                            <label>{info_left.label}</label>
                                            <input type="text" placeholder={info_left.current} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2'/>
                                        </div>
                                    )
                                })}
                                <div className='flex h-full w-full items-end'>
                                    <div className='text-[#1F2F3D] font-semibold border-2 border-[#1F2F3D] p-4 rounded-lg w-full'>
                                        <h1>View Zone Clearance and/or Other Documents</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-2'>
                                {info_right.map((info_right) => {
                                    return(
                                        <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                            <label>{info_right.label}</label>
                                            <input type="text" placeholder={info_right.current} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2'/>
                                        </div>
                                    )
                                })}
                                <div className='flex flex-col h-full w-full'>
                                    <div className='flex h-full items-end'>
                                        <div className='flex flex-col w-full gap-2'>
                                            <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                            <label>{info.label}</label>
                                            <DatePicker
                                            placeholderText={info.current}
                                            dateFormat={['MMMM dd, yyyy']}
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
                                            </div>
                                            <div className='flex flex-row w-full gap-4 font-bold text-[#1F2F3D]'>
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
    </div>
  )
}

export default ClearanceUpdate