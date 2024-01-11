import React, { useReducer, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

const Barangay = () => {


  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  }

  const [details, updateDetails] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
      {
          name: "[Name]",
          vision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          pledge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          department: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      });

  return (
    <form className='h-full overflow-auto font-arimo'>
      <div className='flex flex-row gap-2 font-bold mb-8 mt-2 select-none'>
        <h1 className='text-3xl'>Barangay <span><input type="text" placeholder={details.name} className='placeholder:text-[#1F2F3D] w-28' disabled={edit ? false : true} /></span>  </h1>
        {edit ? 
          <button className='bg-[#FEC51C] text-lg py-1 px-8 rounded-lg shadow-lg hover:bg-[#FEC51C]/90' 
          onClick={() =>{
            handleEdit();
            updateDetails;
          }}>Update</button>
        :
          <div className='flex flex-row items-center gap-1 cursor-pointer' onClick={handleEdit}>
            <EditIcon fontSize='large' />
            <h1 className='text-lg'>Edit</h1>
          </div>
        }
      </div>
      
      <h1 className='text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Vision</h1>
      <textarea rows={3} type="text" placeholder={details.vision} className='placeholder:text-[#1F2F3D] w-full' disabled={edit ? false : true} />
      <h1 className='text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Mission</h1>
      <textarea rows={3} type="text" placeholder={details.mission} className='placeholder:text-[#1F2F3D] w-full' disabled={edit ? false : true} />
      <h1 className='text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Our Service Pledge</h1>
      <textarea rows={3} type="text" placeholder={details.pledge} className='placeholder:text-[#1F2F3D] w-full' disabled={edit ? false : true} />
      <h1 className='text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Functional Departments and Directory</h1>
      <textarea rows={3} type="text" placeholder={details.department} className='placeholder:text-[#1F2F3D] w-full' disabled={edit ? false : true} />
    </form>
  )
}

export default Barangay