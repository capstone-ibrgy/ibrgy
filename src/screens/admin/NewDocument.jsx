import { Add } from '@mui/icons-material';
import React, { useReducer, useState } from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import Close from '@mui/icons-material/Close';
import { addDocument } from '../../api/services';
import PopupDialog from '../../components/PopupDialog';

function NewDocument({ cancel, setAlert }) {

    const [fields, setFields] = useState([""]);

    const [showDialog, setDialog] = useState(null);
    const [document, setDocument] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            name: "",
            id: "",
            description: "",
            price: "",
            fields: [],
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        let docData = document;

        let newField = fields.map((item) => {
            return {
                label: item,
                value: ""
            }
        })
        docData['fields'] = newField.length > 0 ? newField : [];

        console.log(docData)

        setDialog({
            title: 'Add New Document',
            content: 'Are you sure you want to add this document?',
            action: () => {
                setDialog(null);
                addDocument(docData).then((value) => {
                    setAlert({
                        show: true,
                        type: 'success',
                        message: 'The new document has been added successfully.'
                    });
                    cancel();
                }).catch((err) => {
                    setAlert({
                        show: true,
                        type: 'error',
                        message: 'Something went wrong.'
                    });
                    close();
                })
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-[90%] rounded-[20px]'>
            <div className='h-20 w-full'>
                <div className='relative flex flex-row h-full rounded-[20px] bg-[#FEC51C]'>
                    <div
                        onClick={() => {
                            // setEdit(!edit)
                        }}
                        className='cursor-pointer flex w-20 items-center justify-center bg-[#FEC51C] rounded-l-[20px]'>
                        <Add fontSize='large' className='' />
                    </div>
                    <div className='pr-44 flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8'>
                        <img src={doc} className='w-16 h-16' />
                        <input
                            onChange={(e) => {
                                setDocument({
                                    name: e.target.value,
                                    id: e.target.value.toLowerCase()
                                })
                            }}
                            required placeholder='Document name' className='p-2 text-2xl font-bold text-[#1F2F3D] w-full' type='text' />
                    </div>
                    <div className='flex justify-center items-center z-10 h-full right-0 absolute w-40 bg-[#FEC51C] rounded-[20px] drop-shadow-lg'>
                        <h1 className='text-[#1F2F3D] text-xl font-bold '>COST:<span className='flex flex-row gap-1'>
                            <input
                                onChange={(e) => {
                                    setDocument({
                                        price: e.target.value
                                    })
                                }}
                                required placeholder='0' type='number' className='w-16 px-1' />Php</span></h1>

                    </div>
                </div>
            </div>
            <div className='font-arimo bg-[#d1d3d6] mb-1 -mt-4 pt-12 px-8 pb-8'>
                <textarea
                    onChange={(e) => {
                        setDocument({
                            description: e.target.value
                        })
                    }}
                    required
                    rows={4}
                    placeholder='Add description...'
                    className='resize-none w-full p-1 border border-[#1F2F3D]'
                />
                <div className='flex flex-col w-full'>
                    <h1 className='text-lg py-2 font-semibold'>Included Fields (optional)</h1>
                    <div className='flex flex-col gap-2'>
                        {
                            fields.map((item, i) => {
                                return (
                                    <div className='flex flex-row items-center gap-4'>
                                        <input
                                            onChange={(e) => {
                                                let temp = [...fields];
                                                temp[i] = e.target.value;
                                                setFields(temp);
                                            }}
                                            placeholder='Input field name' className='w-72 px-2 border border-[#1F2F3D] h-9' />
                                        {(fields[i] == "" || fields.length == 1 || i === fields.length - 1) ? <Add onClick={() => {
                                            if (fields[i] == "") {
                                                return;
                                            }
                                            let temp = [...fields];

                                            temp.push("");
                                            setFields(temp);
                                        }} className='cursor-pointer' /> :

                                            <Close
                                                className='cursor-pointer'
                                                onClick={() => {
                                                    let temp = [...fields];

                                                    var index = temp.indexOf(item);
                                                    temp.splice(index - 1, 1);

                                                    setFields(temp);
                                                }} />}
                                    </div>
                                )
                            })
                        }</div>
                    <div >

                    </div>
                </div>
                <div className='w-full flex flex-row gap-4 justify-end pt-4'>
                    <button type='submit' className='bg-[#FEC51C] rounded-lg w-32 py-2 font-bold shadow-md'>Add</button>
                    <button type='reset' onClick={() => {
                        cancel();
                    }} className='font-bold'>Cancel</button>
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

        </form>
    )
}

export default NewDocument