import React, { useState } from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import editIcon from '../../assets/images/Community Logo (19).png'
import { Close } from '@mui/icons-material';

function Documents({ docs }) {

    const [edit, setEdit] = useState(false);

    return (
        <div className='flex flex-col w-[90%] rounded-[20px]'>
            <div className='h-20 w-full'>
                <div className='relative flex flex-row h-full rounded-[20px] bg-[#FEC51C]'>
                    <div
                        onClick={() => {
                            // setEdit(!edit)
                        }}
                        className='cursor-pointer flex w-20 items-center justify-center bg-[#FEC51C] rounded-l-[20px]'>
                        {edit ? <Close fontSize='large' className='' /> : <img className='w-6 h-6 ' src={editIcon} alt='edit' />}
                    </div>
                    <div className='pr-44 flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8'>
                        <img src={doc} className='w-16 h-16' />
                        {
                            edit ? <input placeholder={docs.name} className='p-2 text-2xl font-bold text-[#1F2F3D] w-full' type='text' /> : <h1 className='text-white text-2xl font-bold'>{docs.name}</h1>
                        }
                    </div>
                    <div className='flex justify-center items-center z-10 h-full right-0 absolute w-40 bg-[#FEC51C] rounded-[20px] drop-shadow-lg'>
                        <h1 className='text-[#1F2F3D] text-xl font-bold '>COST:<span className='flex flex-row gap-1'>
                            {edit ? <input placeholder={docs.price} type='number' className='w-16 px-1' /> :
                                <p>{docs.price} </p>}Php</span></h1>

                    </div>
                </div>
            </div>
            {edit &&
                <div className='font-arimo bg-[#d1d3d6] mb-1 -mt-4 pt-12 px-8 pb-8'>
                    <textarea
                        rows={4}
                        placeholder={docs.description}
                        className='resize-none w-full p-1 border border-[#1F2F3D]'
                    />
                    <div className='w-full flex flex-row gap-4 justify-end pt-4'>
                        <button className='bg-[#FEC51C] rounded-lg w-32 py-2 font-bold shadow-md'>Update</button>
                        <button className='font-bold'>Cancel</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Documents