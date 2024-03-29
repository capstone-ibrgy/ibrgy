import React, { useState, useRef, useEffect } from 'react'
import edit from '../../assets/images/Community Logo (19).png'
import picture from '../../assets/images/Community Logo (6).png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {
  ref,
  storage,
  addUserProfile,
  getDownloadURL,
  uploadBytesResumable
} from '../../api/services'
import { UserProfile } from '../../models/UserProfile';

const Profile = ({ user, setAlert, rawRequests }) => {

  const hiddenFileInput = useRef(null);
  const [startDate, setStartDate] = useState();
  const [fileError, setFileError] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const { profile, updateProfile } = UserProfile();
  const [userHolder, setUserHolder] = useState(user);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState([0, 0, 0, 0])

  const date = new Date();

  const requests = [
    { label: "To Process", content: `${status[0]} ${status[0] == 1 ? 'request' : 'requests'}` },
    { label: "To Pick-up", content: `${status[1]} ${status[1] == 1 ? 'request' : 'requests'}` },
    { label: "Completed", content: `${status[2]} ${status[2] == 1 ? 'request' : 'requests'}` },
    { label: "Denied", content: `${status[3]} ${status[3] == 1 ? 'request' : 'requests'}` }
  ]

  const genderDrop = [
    {label: 'Male', value: 'Male'},
    {label: "Female", value: 'Female'}
  ]
  const civilDrop = [
    {label: 'Single', value: 'Single'},
    {label: "Married", value: 'Married'},
    {label: 'Divorced', value: 'Divorced'},
    {label: 'Widowed', value: 'Widowed'}
  ] 

  const length = requests.length

  const handleClose = () => {
    setShow(false)
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const fileUploaded = event.target.files[0];

    if (!allowedTypes.includes(fileUploaded.type)) {
      setFileError('Invalid image file.')
      return
    }
    setFileError(null)
    setFileImage(fileUploaded)
  };

  const imageDisplay = (fileImage) => {
    if (fileImage) {
      return URL.createObjectURL(fileImage);
    }

    return !userHolder.userAvatar ? picture : userHolder.userAvatar;
  }

  const handleUpload = async (file) => {

    return new Promise((resolve, reject) => {

      const storageRef = ref(storage, `/${user.userId}/uploads/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', (snapshot) => { },
        (err) => {
          reject(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url)
          });
        });
    })
  }

  const handleSubmit = async (e) => {

    setLoading(true);

    if (fileImage) {
      const imageUrl = await handleUpload(fileImage)
        .then((val) => val)
        .catch((err) => {
          setLoading(false)
          setAlert({
            show: true,
            type: 'error',
            message: 'Something went wrong, please try again.'
          })
        });

      userHolder['userAvatar'] = imageUrl;
    }

    Object.keys(profile).forEach((inputKey) => {

      if (['userId', 'admin', 'userAvatar'].includes(inputKey)) return;

      const field = profile[inputKey];

      if (field != '' && field != null) {
        userHolder[inputKey] = field;
        updateProfile({ [inputKey]: '' })
      }
    });

    await addUserProfile(userHolder.userId, userHolder).then((_) => {
      setLoading(false)
      setAlert({
        show: true,
        type: 'success',
        message: 'Profile has been updated successfully.'
      })
    }).catch((_) => {
      setLoading(false)
      setAlert({
        show: true,
        type: 'error',
        message: 'Something went wrong, please try again.'
      })
    });

  }

  const showDialog = () => {
    return (<Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Update Profile"}
      </DialogTitle>
      <DialogContent>
        <p>Are you sure you want to update your profile?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          handleClose();
          handleSubmit();
        }} autoFocus>
          Yes
        </Button>
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>)
  }

  useState(() => {
    const group = rawRequests.reduce((group, form) => {
      const { status } = form.data;

      group[status] = group[status] ?? [];
      group[status].push(form);
      return group;
    }, {});


    let temp = [0, 0, 0, 0];

    temp[0] = !group[0] ? 0 : group[0].length;
    temp[1] = !group[1] ? 0 : group[1].length;
    temp[2] = !group[2] ? 0 : group[2].length;
    temp[3] = !group[3] ? 0 : group[3].length;

    setStatus(temp)
  }, [rawRequests])

  return (
    <div className='w-full h-full'>
      <h1 className='flex flex-row text-3xl font-bold mt-2 mb-4'><span className='mr-2'><img src={edit} alt="" className='w-8 h-8' /></span>Manage Profile</h1>
      <div className='h-[85%] w-full overflow-auto'>

        <div className='relative flex flex-row'>
          {isLoading && <div className='absolute z-10 w-full h-full bg-white/50 flex items-center justify-center'>
            <CircularProgress />
          </div>}
          <div className='flex flex-col border-2 border-[#1F2F3D] bg-[#D9D9D9] w-48 h-auto rounded-lg'>
            <div className='w-full border-b-2 border-[#1F2F3D]'>
              <div className='m-auto h-[120px] w-[120px] p-2'>
                <img src={imageDisplay(fileImage)} alt="profile"
                  className='rounded-full object-cover w-full h-full' />
              </div>

            </div>
            <div className='border-b-2 border-[#1F2F3D]'>
              <h2 className='text-lg text-center font-bold my-2'>MY REQUESTS</h2>
            </div>
            {requests.map((requests, i) => {
              return (
                <div key={requests.label} className={`${i === (length - 1) ? '' : 'border-b-2 border-[#1F2F3D]'} h-full`}>
                  <h2 className='text-md font-bold mt-1 ml-1'>{requests.label}</h2>
                  <div className='text-md mt-1 ml-4'>{requests.content}</div>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col ml-6 mt-8 gap-1 w-[70%]'>
            <button
              onClick={() => { handleClick() }}
              className='bg-[#1F2F3D] text-white border-2 border-[#1F2F3D] font-semibold rounded-lg py-2 w-32 drop-shadow-md'>
              Select Image
              <input
                onChange={handleChange}
                onClick={handleChange}
                ref={hiddenFileInput}
                type='file'
                className='hidden'
                accept='image/png, image/gif, image/jpeg' />
            </button>
            <button
              onClick={() => {
                setFileImage(null)
              }}
              className='border-2 border-[#1F2F3D] text-[#1F2F3D] font-semibold rounded-lg py-2 w-32 drop-shadow-md'>Cancel</button>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-full font-semibold'>
                <label>Last Name</label>
                <input
                  value={profile.lastname}
                  onChange={(e) => { updateProfile({ lastname: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.lastname}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>First Name</label>
                <input
                  value={profile.firstname}
                  onChange={(e) => { updateProfile({ firstname: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.firstname}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
              <div className='flex flex-col w-16 font-semibold'>
                <label>M.I.</label>
                <input
                  value={profile.mi}
                  onChange={(e) => { updateProfile({ mi: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.mi}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
            </div>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-16 font-semibold'>
                <label>Age</label>
                <input
                  value={startDate == null ? profile.age : profile.age = calculate_age(startDate)}
                  onChange={(e) => { updateProfile({ age: e.target.value }) }}
                  type="text"
                  disabled={true}
                  placeholder={userHolder.age}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>Sex</label>
                <select
                  onChange={(e) => { updateProfile({ gender: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.gender}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'>
                  {genderDrop.map((option) => (
                    <option value={option.value} selected={userHolder.gender == option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>Date of Birth</label>
                <DatePicker
                  placeholderText={format(userHolder.birthdate.toDate(), 'MMMM dd, yyyy')}
                  dateFormat={['MMMM dd, yyyy']}
                  selected={profile.birthdate}
                  maxDate={date}
                  onChange={(date) => {
                    setStartDate(date)
                    updateProfile({ birthdate: date })
                  }}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
              </div>
            </div>
            <div className='flex flex-col w-full font-semibold'>
              <label>Place of Birth</label>
              <input
                value={profile.birthplace}
                onChange={(e) => { updateProfile({ birthplace: e.target.value }) }}
                type="text"
                placeholder={userHolder.birthplace}
                className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
            </div>
            <div className='flex flex-col w-full font-semibold'>
              <label>Address</label>
              <div className='flex flex-col w-full gap-2'>
                <div className='relative flex flex-row w-full gap-2'>
                  <input
                    value={profile.zone}
                    onChange={(e) => { updateProfile({ zone: e.target.value }) }}
                    type="text"
                    placeholder={userHolder.zone}
                    className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
                  <input
                    value={profile.barangay}
                    onChange={(e) => { updateProfile({ barangay: e.target.value }) }}
                    type="text"
                    placeholder={userHolder.barangay}
                    className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
                </div>
                <div className='relative flex flex-row w-full gap-2'>
                  <input
                    value={profile.city}
                    onChange={(e) => { updateProfile({ city: e.target.value }) }}
                    type="text"
                    placeholder={userHolder.city}
                    className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
                  <input
                    value={profile.province}
                    onChange={(e) => { updateProfile({ province: e.target.value }) }}
                    type="text"
                    placeholder={userHolder.province}
                    className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-48' />
                </div>
              </div>
              
            </div>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-full font-semibold'>
                <label>Nationality</label>
                <input
                  value={profile.national}
                  onChange={(e) => { updateProfile({ national: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.national}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>Civil Status</label>
                <select
                  onChange={(e) => { updateProfile({ civilstatus: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.civilstatus}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' >
                    {civilDrop.map((option) => (
                    <option value={option.value} selected={userHolder.civilstatus == option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-full font-semibold'>
                <label>Occupation</label>
                <input
                  value={profile.occupation}
                  onChange={(e) => { updateProfile({ occupation: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.occupation}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
              <div className='flex flex-col w-48 font-semibold'>
                <label>Phone Number</label>
                <input
                  value={profile.phone}
                  onChange={(e) => { updateProfile({ phone: e.target.value }) }}
                  type="text"
                  placeholder={userHolder.phone}
                  className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2' />
              </div>
            </div>
            <div className='flex flex-row h-full justify-end mt-2'>
              <button
                onClick={() => {
                  setShow(true);
                  // handleSubmit();

                }}
                className='bg-[#FEC51C] w-64 rounded-lg py-4 text-[#1F2F3D] font-bold drop-shadow-md text-xl'>Update</button>
            </div>
          </div>
        </div>
      </div>
      {show && showDialog()}
    </div>
  )
}

const calculate_age = (dob) => {
  var today = new Date();
  var birthDate = new Date(dob);  // create a date object directly from `dob1` argument
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age_now--;
  }
  return age_now;
}

export default Profile