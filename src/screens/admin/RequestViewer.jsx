import React, { useEffect, useState } from 'react'
import doc from "../../assets/images/Community Logo (5).png";
import { Close } from '@mui/icons-material';
import { indexFields } from '../../utils/FormIndexer';
import { format } from 'date-fns';
import PopupDialog from '../../components/PopupDialog';
import { createNotification, updateFormStatus } from '../../api/services';
import { Backdrop } from '@mui/material';

function RequestViewer({ form, close, document, setAlert }) {

    const [fields, setFields] = useState([[], []]);
    const [showDialog, setDialog] = useState(false);
    const [showDocs, setShowDocs] = useState(false);

    useEffect(() => {
        const fields = indexFields(form, document);

        setFields(fields);
    }, [form]);

    const handleDenyRequest = () => {
        updateFormStatus(form.id, 3).then((val) => {
            setAlert({
                show: true,
                type: 'success',
                message: 'The request has been denied successfully.'
            });

            createNotification(form['form'], 3);
            close();
        }).catch((err) => {
            console.log(err);
            setAlert({
                show: true,
                type: 'error',
                message: 'Something went wrong.'
            });
            close();
        })
    }

    const handleConfirmRequest = () => {
        updateFormStatus(form.id, 1).then((val) => {
            setAlert({
                show: true,
                type: 'success',
                message: 'The request has been confirmed.'
            });

            createNotification(form['form'], 1);
            close();
        }).catch((err) => {
            console.log(err);
            setAlert({
                show: true,
                type: 'error',
                message: 'Something went wrong.'
            });
            close();
        })
    }

    return (
        <div className='w-[900px] h-full overflow-auto '>
            <div className="w-full rounded-[20px] bg-[#1F2F3D] pb-4 mt-2 mb-4 ">
                <div className="relative flex flex-col w-full bg-white rounded-t-[20px] text-white">
                    <div className="absolute px-6 flex flex-row h-20 bg-[#1F2F3D] rounded-[20px] w-full items-center">
                        <img src={doc} className="h-20 w-20" />
                        <h1 className="text-2xl font-bold mx-4 flex-1">{document.name}</h1>
                        <Close
                            onClick={() => { close() }}
                            className='cursor-pointer' />
                    </div>
                    <div className='flex flex-row w-full gap-8 px-8 py-24 pb-8'>
                        <div className='flex flex-col w-full gap-2'>
                            <p className='text-[#1F2F3D] font-bold text-lg'>Personal Information</p>
                            {fields[0].map((info_left) => {
                                return (
                                    <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                        <label>{info_left.label}</label>
                                        <input readOnly type="text" placeholder={info_left.current} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2' />
                                    </div>
                                )
                            })}

                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <p className='text-[#1F2F3D] font-bold text-lg'>Additional Information</p>
                            {fields[1].map((info_right) => {
                                return (
                                    <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                        <label>{info_right.label}</label>
                                        <input readOnly type="text" placeholder={info_right.current} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2' />
                                    </div>
                                )
                            })}
                            <p className='pt-4 pb-2 text-[#1F2F3D] font-bold text-lg'>Included Document</p>
                            <div
                                onClick={() => {
                                    setShowDocs(true);
                                }}
                                className='text-[#1F2F3D] cursor-pointer font-semibold border-2 hover:bg-[#FEC51C] border-[#1F2F3D] p-4 rounded-lg w-full'>
                                <h1>View Zone Clearance and/or Other Documents</h1>
                            </div>
                            <p className='pt-4 pb-2 text-[#1F2F3D] font-bold text-lg'>Request Summary</p>
                            <div className='flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                <label>Requested Document</label>
                                <input readOnly type="text" placeholder={document.name} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2' />
                            </div>
                            <div className='pt-1 flex flex-col w-full font-semibold text-[#1F2F3D]'>
                                <label>Preferred Pick-up Date</label>
                                <input readOnly type="text" placeholder={format(form.form.pick_up.toDate(), 'MMMM dd, yyyy')} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] truncate rounded-lg h-10 p-2' />
                            </div>
                            <div className='flex flex-row w-full h-full items-end gap-4 font-bold text-[#1F2F3D] pt-4'>

                                <button
                                    onClick={() => {
                                        setDialog({
                                            title: 'Deny Request',
                                            content: 'Are you sure you want to deny this request?',
                                            action: () => {
                                                handleDenyRequest();
                                            }
                                        })
                                    }}
                                    className='border-2 border-[#FEC51C] bg-white w-full p-4 rounded-lg drop-shadow-lg'>Deny Request</button>
                                <button
                                    onClick={() => {
                                        setDialog({
                                            title: 'Confirm Request',
                                            content: 'Are you sure you want to confirm this request?',
                                            action: () => {
                                                handleConfirmRequest();
                                            }
                                        })
                                    }}
                                    className='border-2 border-[#FEC51C] bg-[#FEC51C] w-full p-4 rounded-lg drop-shadow-lg'>Confirm Request</button>
                            </div>
                        </div>
                        {!!showDialog && <PopupDialog
                            show={!!showDialog}
                            close={() => { setDialog(null) }}
                            title={showDialog.title}
                            content={showDialog.content}
                            action1={() => {
                                showDialog.action();
                                setDialog(null)
                            }}
                            action2={() => {
                                setDialog(null)
                            }}

                        />}
                    </div>
                </div>
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={showDocs}
                    onClick={() => {
                        setShowDocs(false);
                    }}
                >
                    <div className="p-4 w-[50%] h-full">
                        <img
                            src={form.form.uploaded_docs}
                            alt="docs"
                            className="w-full h-full"
                        />
                    </div>
                </Backdrop>
            </div>
        </div>
    )
}

export default RequestViewer