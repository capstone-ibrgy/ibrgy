import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import arrow from '../assets/images/Arrow right 2.png'
import arrow2 from '../assets/images/Arrow down.png'
import doc from '../assets/images/Community Logo (5).png'

const Services = () => {
    const data = false
    const data2 = false
    const data3 = true
    const data4 = false
    const data5 = false
    const open = true

    const navigate = useNavigate()

    const [drop, setDrop] = useState(false) //for the description of each document
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    const [drop4, setDrop4] = useState(false)

    const handleDrop = () => {
      setDrop(!drop)
    }
    const handleDrop2 = () => {
      setDrop2(!drop2)
    }
    const handleDrop3 = () => {
      setDrop3(!drop3)
    }
    const handleDrop4 = () => {
      setDrop4(!drop4)
    }


  return (
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} open={open} className='' />
            <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
              <p className='mb-4 font-arimo'>{'Home > Services'}</p>
              <h1 className='text-3xl font-bold font-arimo mb-8'>Documents Offered</h1>
              <div className='flex flex-col relative'>
                <div className={`bg-[#FEC51C] rounded-2xl flex flex-row w-[90%] items-center z-50 ${!drop ? 'mb-8' : 'mb-0'}`}>
                  <img 
                  className='object-scale-down h-[20px] w-auto mx-6 cursor-pointer' 
                  onClick={handleDrop}
                  src={!drop ? arrow : arrow2} alt="" />
                  <div className='bg-[#1F2F3D] w-full rounded-2xl flex flex-row items-center justify-end'>
                    <div className='flex flex-row items-center w-full'>
                      <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                      <h1 className='text-2xl font-bold font-arimo text-white'>Community Tax Certificate (Cedula)</h1>
                    </div>
                    <div
                    onClick={
                      () => {
                        navigate('/services/community-tax-certificate')
                      }
                    }
                    className='bg-[#FEC51C] p-7 rounded-2xl cursor-pointer'>
                      <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto'>
                        REQUEST
                      </div>
                    </div>
                  </div>
                </div>
                <div className={!drop ? 'hidden' : 'font-arimo bg-[#d1d3d6] w-[90%] mb-8 z-0 -mt-4 pt-12 px-8 pb-8'}>
                  The official document verifying the resident's financial hardship, qualifying them for social welfare
                  benefits. It serves as proof of their economic disadvantage and is required when applying for
                  government assistance programs, medical aid, or other forms of support for those in need.
                </div>
              </div>
              
              <div className='flex flex-col relative'>
                <div className={`bg-[#FEC51C] rounded-2xl flex flex-row w-[90%] items-center z-50 ${!drop2 ? 'mb-8' : 'mb-0'}`}>
                  <img 
                  className='object-scale-down h-[20px] w-auto mx-6 cursor-pointer' 
                  onClick={handleDrop2}
                  src={!drop2 ? arrow : arrow2} alt="" />
                  <div className='bg-[#1F2F3D] w-full rounded-2xl flex flex-row items-center justify-end'>
                    <div className='flex flex-row items-center w-full'>
                      <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                      <h1 className='text-2xl font-bold font-arimo text-white'>Barangay Clearance</h1>
                    </div>
                    <div 
                    onClick={
                      () => {
                        navigate('/services/barangay-clearance')
                      }
                    }
                    className='bg-[#FEC51C] p-7 rounded-2xl cursor-pointer'>
                      <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto'>
                        REQUEST
                      </div>
                    </div>
                  </div>
                </div>
                <div className={!drop2 ? 'hidden' : 'font-arimo bg-[#d1d3d6] w-[90%] mb-8 z-0 -mt-4 pt-12 px-8 pb-8'}>
                  The official document verifying the resident's financial hardship, qualifying them for social welfare
                  benefits. It serves as proof of their economic disadvantage and is required when applying for
                  government assistance programs, medical aid, or other forms of support for those in need.
                </div>
              </div>
              <div className='flex flex-col relative'>
                <div className={`bg-[#FEC51C] rounded-2xl flex flex-row w-[90%] items-center z-50 ${!drop3 ? 'mb-8' : 'mb-0'}`}>
                  <img 
                  className='object-scale-down h-[20px] w-auto mx-6 cursor-pointer' 
                  onClick={handleDrop3}
                  src={!drop3 ? arrow : arrow2} alt="" />
                  <div className='bg-[#1F2F3D] w-full rounded-2xl flex flex-row items-center justify-end'>
                    <div className='flex flex-row items-center w-full'>
                      <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                      <h1 className='text-2xl font-bold font-arimo text-white'>Certificate of Residency</h1>
                    </div>
                    <div 
                    onClick={
                      () => {
                        navigate('/services/certificate-of-residency')
                      }
                    }
                    className='bg-[#FEC51C] p-7 rounded-2xl cursor-pointer'>
                      <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto'>
                        REQUEST
                      </div>
                    </div>
                  </div>
                </div>
                <div className={!drop3 ? 'hidden' : 'font-arimo bg-[#d1d3d6] w-[90%] mb-8 z-0 -mt-4 pt-12 px-8 pb-8'}>
                  The official document verifying the resident's financial hardship, qualifying them for social welfare
                  benefits. It serves as proof of their economic disadvantage and is required when applying for
                  government assistance programs, medical aid, or other forms of support for those in need.
                </div>
              </div>
              <div className='flex flex-col relative'>
                <div className={`bg-[#FEC51C] rounded-2xl flex flex-row w-[90%] items-center z-50 ${!drop4 ? 'mb-8' : 'mb-0'}`}>
                  <img 
                  className='object-scale-down h-[20px] w-auto mx-6 cursor-pointer' 
                  onClick={handleDrop4}
                  src={!drop4 ? arrow : arrow2} alt="" />
                  <div className='bg-[#1F2F3D] w-full rounded-2xl flex flex-row items-center justify-end'>
                    <div className='flex flex-row items-center w-full'>
                      <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                      <h1 className='text-2xl font-bold font-arimo text-white'>Certificate of Indigency</h1>
                    </div>
                    <div 
                    onClick={
                      () => {
                        navigate('/services/certificate-of-indigency')
                      }
                    }
                    className='bg-[#FEC51C] p-7 rounded-2xl cursor-pointer'>
                      <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto'>
                        REQUEST
                      </div>
                    </div>
                  </div>
                </div>
                <div className={!drop4 ? 'hidden' : 'font-arimo bg-[#d1d3d6] w-[90%] mb-8 z-0 -mt-4 pt-12 px-8 pb-8'}>
                  The official document verifying the resident's financial hardship, qualifying them for social welfare
                  benefits. It serves as proof of their economic disadvantage and is required when applying for
                  government assistance programs, medical aid, or other forms of support for those in need.
                </div>
              </div>
            </div>
        </div>
        <Navbar2 className='' />
    </div>
  )
}

export default Services