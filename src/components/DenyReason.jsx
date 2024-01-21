import React, { useState } from 'react'


const DenyReason = ({ denyRequest }) => {

    const [reason, setReason] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();

        denyRequest(reason);

    }

    return (
        <>
            <div className='z-20 absolute h-screen w-full bg-[#FEC51C]/50 font-arimo'>
                <div className='flex flex-col w-full h-full items-center justify-center font-arimo text-white'>
                    <div className='flex flex-col w-[460px] h-[450px] bg-[#a41f1f] rounded-[20px] pb-4'>
                        <div className='relative flex flex-row w-full h-16 items-center px-4'>
                            <div className='flex h-10 w-full items-center justify-center'>
                                <h1 className='font-bold text-xl'>Reason for Denial</h1>
                            </div>
                        </div>
                        <form
                            className='flex flex-col h-full w-full bg-white items-center pb-5 px-8 gap-4'
                            onSubmit={onSubmit}
                        >
                            <h1 className='text-[#1F2F3D] font-bold text-md my-4'>Please state the reason for denying this request.</h1>
                            <textarea
                                rows={4}
                                type="text"
                                required
                                value={reason}
                                placeholder="Ex. Incorrect Inputs"
                                className="placeholder:text-[#9d9d9d] text-[#1F2F3D] w-full border-2 border-[#1F2F3D] rounded-md p-4 h-48 resize-none"
                                onChange={(e) => {
                                    setReason(e.target.value);
                                }}
                            />
                            <div className='flex w-full h-[80%] justify-center items-center'>
                                <button type='submit' className='bg-[#FEC51C] w-[40%] h-12 rounded-lg py-3 text-[#1F2F3D] font-bold drop-shadow-md text-lg'>
                                    Send
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DenyReason