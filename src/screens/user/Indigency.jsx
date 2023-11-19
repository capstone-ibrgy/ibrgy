import React, { useState, useEffect, useRef } from 'react'
import DatePicker from "react-datepicker";
import doc from '../../assets/images/Community Logo (5).png'
import upload from '../../assets/images/Community Logo (16).png'
import data from '../../assets/data/content.json'

import { format } from 'date-fns'
import { IndigencyForm } from '../../models/IndigencyForm'
import {
  requestForm,
  ref,
  storage,
  uploadBytesResumable,
  getDownloadURL
} from '../../api/services'

import CloseIcon from '@mui/icons-material/Close';

import "react-datepicker/dist/react-datepicker.css";

const Indigency = ({ height, profile, setProgress, setShowUpload }) => {

  const [startDate, setStartDate] = useState();
  const [fileError, setFileError] = useState('');
  const { form, updateForm } = IndigencyForm();

  const hiddenFileInput = useRef(null);

  useEffect(() => {
    updateForm({ profile: profile })
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.uploaded_docs || form.uploaded_docs == '') {
      setFileError('Please upload the required documents.')
      return
    }

    updateForm(
      {
        income: e.target[2].value,
        payment: 'Cash on pick-up'
      })

    setShowUpload(true)
    handleUpload();
  }

  const handleUpload = () => {
    const file = form.uploaded_docs;

    const storageRef = ref(storage, `/${form.profile.userId}/uploads/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(percent);
      },
      (err) => console.log(err),
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((url) => {

          var newForm = form;

          newForm.uploaded_docs = url;
          requestForm(newForm)
          setShowUpload(false)
          resetForm()
        });
      }
    );
  }

  const resetForm = () => {
    updateForm({
      height: '',
      weight: '',
      income: 'Below Php 10,000',
      uploaded_docs: null,
      pick_up: '',
      payment_method: ''
    });
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    const fileUploaded = event.target.files[0];

    if (!allowedTypes.includes(fileUploaded.type)) {
      setFileError('Invalid file type. Please upload a JPEG, PNG, or PDF file.')
      return
    }
    setFileError(null)
    updateForm({ uploaded_docs: fileUploaded })
  };

  return (
    <div className='w-full h-full'>
      <h1 className='text-3xl font-bold my-2'>Request Form</h1>
      <div
        style={{ height: height, minHeight: "420px" }}
        className='relative flex flex-col items-center justify-center'>
        <div
          className={`flex flex-col w-[80%] rounded-[20px] bg-[#D9D9D9] text-[#1F2F3D]`}>
          <div className='relative flex flex-row w-full h-16 bg-[#1F2F3D] rounded-[20px] items-center px-6 gap-6'>
            <img src={doc} className='w-14 h-14' />
            <h1 className='text-white text-xl font-bold'>{data['documents'][3].name}</h1>
            <div className='absolute right-[-1px] rounded-[20px] w-28 h-full bg-[#FEC51C] py-3 px-6'>
              <h1 className='font-bold text-lg text-center leading-tight'>COST: {data['documents'][3].price}</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col w-full flex-1 px-6 py-2 gap-1'>
            <div className='flex-1 flex flex-col w-1/3'>
              <label className='py-1 font-bold text-[#1F2F3D] text-sm'>Monthly Income</label>
              <select
                onChange={(e) => {
                  updateForm({ income: e.target.value })
                }}
                name="income" id="income" className='border-2 h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-2'>
                <option value="Below Php 10,000">below Php 10,000</option>
                <option value="Php 10,000 - Php 20,000">Php 10,000 - Php 20,000</option>
                <option value="Php 20,000 - Php 40,000">Php 20,000 - Php 40,000</option>
                <option value="Php 40,000 - Php 60,000">Php 40,000- Php 60,000</option>
                <option value="Php 60,000 - Php 100,000">Php 60,000 - Php 100,000</option>
                <option value="Above Php 100,000">above Php 100,000</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col w-full'>
              <label className='py-1 font-bold text-sm'>Purpose</label>
              <textarea value={form.purpose} required={true} onChange={(e) => { updateForm({ purpose: e.target.value }) }} className='resize-none border-2 h-12 border-[#1F2F3D] bg-[#D9D9D9] rounded-[10px] px-2' />
            </div>
            <div className='flex flex-row py-2'>
              <div className='flex-1 flex flex-row border-2 border-[#1F2F3D] h-full rounded-[10px] items-center justify-center gap-2'>
                <div onClick={handleClick} className='text-[#1F2F3D] font-bold px-2 text-sm cursor-pointer'>
                  <input onChange={handleChange}
                    ref={hiddenFileInput} type='file' className='hidden' accept='image/png, image/gif, image/jpeg' />
                  {!form.uploaded_docs ? "Upload Zone Clearance and/or Other Documents" : "Chosen file: " + form.uploaded_docs.name}
                </div>
                {!form.uploaded_docs ? <img className='h-6' src={upload} alt="" /> : <CloseIcon className='cursor-pointer' onClick={() => { updateForm({ uploaded_docs: null }) }} fontSize='small' />}
              </div>
              <div className='w-1/3 pl-2'>
                <div className='flex flex-col'>
                  <label className='bg-[#D9D9D9] font-arimo font-bold text-sm py-1'>Preferred Pick-up Date</label>
                  <DatePicker
                    placeholderText='Month Day, Year'
                    dateFormat={['MMMM dd, yyyy']}
                    selected={startDate}
                    required={true}
                    onSelect={(e) => {
                      if (e != null) {
                        updateForm({ pick_up: e })
                      }
                      console.log(e)
                    }}
                    onChange={(e) => {
                      setStartDate(e)
                      updateForm({ pick_up: e })
                    }}
                    className='border-2 h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-6 text-sm' />
                </div>
                <div className=''>
                  <label className='font-bold text-sm py-1'>Payment Method</label>
                  <div className='flex items-center border-2 text-sm h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] text-red-600 justify-center font-bold'>
                    Cash on pick-up only
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row w-full h-14 justify-between'>
              <p className={`${!fileError && 'opacity-0'} ml-2 flex-1 text-sm font-semibold text-red-600`}>{fileError}</p>
              <button type='submit' className='self-center cursor-pointer h-10 flex items-center justify-center ml-2 w-1/3 rounded-[10px] drop-shadow-lg bg-[#FEC51C]'>
                <h1 className='font-bold'>Submit</h1>
              </button>
            </div>
          </form>
          <div className='w-full h-4 bg-[#1F2F3D] rounded-b-[20px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Indigency