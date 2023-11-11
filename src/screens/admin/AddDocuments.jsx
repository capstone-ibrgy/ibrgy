import React, {useState} from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import edit from '../../assets/images/Community Logo (21).png'
import plus from '../../assets/images/Group 69.png'
import check from '../../assets/images/checked.png'

const AddDocuments = () => {

    const [disable, setDisable] = useState(true);

    const handleName = () => {
        setDisable(!disable)
    }


  return (
    <div className='flex flex-col w-full h-full'>
      <h1 className='text-3xl font-bold font-arimo mt-2 mb-4'>Post Available Documents</h1>
      <div className='h-[85%] w-full overflow-auto'>
        <div className='flex flex-col h-full w-full gap-4'>
            <div className='flex bg-[#1F2F3D] h-[80%] w-full rounded-[20px] pb-4'>
                <div className='flex flex-col bg-[#D9D9D9] h-full w-full rounded-t-[20px]'>
                    <div className='h-[20%] w-full bg-[#1F2F3D] flex justify-center py-2 rounded-[20px]'>
                        <div className='h-full w-[90%] flex flex-row items-center'>
                            <img src={doc} alt="" className='w-16 h-16'/>
                            <input disabled={disable} type="text" placeholder='[Document Name]' className={`bg-[#1F2F3D] text-white text-xl placeholder-white font-bold w-full mx-4 h-16 ${!disable ? 'border-2 border-white' : ''}`} />
                            <img 
                            onClick={handleName}
                            src={disable ? edit : check} alt="" className={`justify-end cursor-pointer ${disable ? 'w-8 h-8' : 'w-10 h-10'}`}/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex flex-col w-[90%] font-semibold mt-6'>
                            <label>Description</label>
                            <input type="text" className='border-2 border-[#1F2F3D] bg-[#D9D9D9] rounded-lg h-20 p-2'/>
                            <div className='flex justify-end w-full mt-8'>
                                <img src={plus} alt="" className='h-6 w-6 cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-[#FEC51C] h-12 w-[20%] rounded-lg font-bold drop-shadow-lg'>POST</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddDocuments