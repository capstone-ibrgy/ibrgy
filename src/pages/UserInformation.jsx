import React from 'react'
import bg from '../assets/images/background.svg'
import { Link } from 'react-router-dom'

function UserInformation() {

    class TextField {
        constructor(name, obscured) {
    
          const [value, setValue] = useState('');
          const [error, setError] = useState(null);
          
          this.name = name;
          this.value = value;
          this.setValue = setValue;
          this.obscured = obscured;
          this.error = error;
          this.setError = setError;
        }
      }
      
  return (
    <div className='relative h-screen w-full bg-[#FEC51C]'>
      <div className="flex flex-row">
      <div className='bg-white w-[65%] h-screen rounded-r-[24px]'>
          <div className='flex flex-col items-center pt-8'>
            <h1 className='font-arimo font-bold text-[#1F2F3D] text-[26px]'>USER INFORMATION</h1>
            <div className='z-10 flex flex-col w-[500px] items-center'>
            <form className='flex flex-col z-10 w-[350px] py-2 font-arimo text-[#1F2F3D]'> 

            </form>
            </div>
          </div>
        </div>
        <div className='w-[35%] flex flex-col items-end'>
          <Link to='/'>
            <div className='h-20 text-md font-bold font-arimo p-10'>
              Back
            </div>
          </Link>
          <div className='flex flex-col w-full font-arimo italic px-16 font-bold text-[#1F2F3D] text-[26px]'>
            <div className='flex justify-start '>
              <h1 className=''>Tinood nga Serbisyo, </h1>
            </div>
            <div className='flex justify-end'>
              <h1 className=''>Tuhod sa Kinahanglanon!</h1>
            </div>
          </div>
        </div>
        
      </div>

      <img src={bg} className='absolute bottom-0 transform -scale-x-100' />
    </div>
  )
}

function CustomInput({textField, submit}) {

    return (
      <div className='w-full flex flex-col'>
        <label className='py-1 text-sm font-bold'>{textField.name}</label>
        <input type={textField.obscured ? "password": "text"} value={textField.value} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg'
          onChange={(e) => {
            var value = e.target.value;
  
            if(submit){
              if(!value){
                textField.setError('Required field')
              }else{
                textField.setError(null);
              }
            }
  
            textField.setValue(e.target.value)
          }} />
        {textField.error != null && <p className='px-2 text-xs font-bold text-[#E8090C]'>{textField.error}</p>}
      </div>
    );
  }

export default UserInformation