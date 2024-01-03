import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function RequestEntry({ item }) {

    const stateBtn = (status) => {
        const button = [
            <div className={`flex flex-row w-28 h-8  bg-[#FFA500] rounded-md text-black items-center px-2 shadow-md`}>
                <ArrowDownwardIcon fontSize='small' />
                <p className='text-sm'>Processing</p>
            </div>,
            <div className={`flex flex-row w-28 h-8  bg-[#0000FF]/70 rounded-md text-white items-center px-2 shadow-md`}>
                <ArrowDownwardIcon fontSize='small' />
                <p className='text-sm'>For Pick-up</p>
            </div>,
            <div className={`flex flex-row w-28 h-8  bg-[#00FF00]/70 rounded-md text-black items-center px-3 shadow-md`}>
                <ArrowDownwardIcon fontSize='small' />
                <p className='text-sm'>Released</p>
            </div>
        ]

        return button[status]
    }

    return (
        <div className="z-10 flex cursor-pointer flex-row text-[#1F2F3D] gap-4 w-full h-12 items-center hover:bg-[#fec51c]  ">
            <p className="w-[15%] ml-10">{item["no"]}</p>
            <p className="w-full">{item["name"]}</p>
            <p className="w-[90%]">{item["date"]}</p>
            <p className="w-[90%]">{item["pick_up"]}</p>
            <p className="flex justify-center w-[80%] text-center mr-8 cursor-pointer">
                {stateBtn(item["status"])}
            </p>
        </div>
    )
}

export default RequestEntry