import React, { useState, useEffect } from "react";
import doc from "../../assets/images/Community Logo (5).png";
import { format } from "date-fns";
import RequestEntry from "../../components/RequestEntry";
import releaseIcon from '../../assets/images/release.png'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, CircularProgress } from "@mui/material";
import RequestViewer from "./RequestViewer";
import { Upcoming, Error, Close } from "@mui/icons-material";
import { createNotification, updateFormStatus } from "../../api/services";

function RequestList({ forms, document, setAlert, screen, fetchState }) {

    const [rows, setRows] = useState([]);
    const [form, setForm] = useState(null);
    const [release, setRelease] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const statuses = ['Processing', 'For Pick-up', 'Released', 'Denied']

    useEffect(() => {
        var rows = [];

        if (!forms) return setRows(rows);

        forms.forEach((form, i) => {

            var data = form.data;
            data['id'] = form.id;

            const request = {
                id: form.id,
                no: i + 1,
                name: form.name,
                date: format(data.createdAt.toDate(), "MMMM d, yyyy"),
                pick_up: format(data.form.pick_up.toDate(), "MMMM d, yyyy"),
                status: !data.status ? 0 : data.status,
                actual_status: statuses[!data.status ? 0 : data.status],
                data
            };

            rows.push(request);
        });

        setRows(rows);
    }, [forms, document, screen]);

    const StateBuilder = (state) => {

        const states = {
            "2": {
                icon: <Upcoming />,
                text: 'There are no requests.'
            },
            "-1": {
                icon: <Error />,
                text: 'Something went wrong.'
            },
            "0": {
                icon: <CircularProgress />,
                text: 'Loading requests...'
            }
        }

        return (
            <div className='flex flex-col h-full justify-center items-center gap-4 text-[#1F2F3D]'>
                {states[`${state}`].icon}
                <p className='text-sm'>{states[`${state}`].text}</p>
            </div>
        )
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = rows.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(rows)
        }
    }

    return (
        <div className="flex flex-col w-full h-full font-arimo">
            <h1 className="text-3xl font-bold mt-3 mb-1">Requests List</h1>
            <div className="w-full h-full rounded-[20px] bg-[#1F2F3D] pb-4 mt-2 mb-4 overflow-hidden">
                <div className="relative flex flex-col w-full h-full bg-[#D9D9D9] rounded-t-[20px] text-white">
                    <div className="absolute px-6 flex flex-row h-20 bg-[#1F2F3D] rounded-[20px] w-full items-center">
                        <img src={doc} className="h-20 w-20" />
                        <h1 className="text-2xl font-bold mx-4 flex-1">{document.name}</h1>
                        <div className="h-10 flex flex-row px-2 items-center bg-white rounded-lg">
                            <input type="text" placeholder='Search...' 
                            className="p-1 rounded-md text-[#1F2F3D] focus:outline-none"
                            onChange={(e) => searchItems(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter'){
                                    searchItems(e.target.value)
                                }
                            }}
                            />
                            <SearchIcon className="text-[#1F2F3D] cursor-pointer" onClick={() => searchItems(searchInput)} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full h-32 rounded-t-[20px] border-2 border-[#1F2F3D] items-end">
                        <div className="w-full flex pt-20 items-center h-32">
                            <div className="bg-[#D9D9D9] flex flex-row text-[#1F2F3D] font-bold gap-4 w-full items-center">
                                <label className=" w-[15%] ml-10">No.</label>
                                <label className=" w-full">Name</label>
                                <label className="w-[90%]">Date Requested</label>
                                <label className="w-[90%]">Claiming Date</label>
                                <label className="w-[80%] text-center mr-8">Status</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full my-3 select-none overflow-auto">
                        {fetchState != 1 ? StateBuilder(`${fetchState}`) :
                            rows.length == 0 ? StateBuilder("2") :
                                searchInput.length > 1 ?
                                filteredResults.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {

                                                if (item['data'].status == 2) return setAlert({
                                                    show: true,
                                                    type: 'info',
                                                    message: 'This request has been completed.'
                                                });

                                                if (item['data'].status != 1) return setForm(item.data);

                                                setRelease(item['data']);

                                            }} className="h-12 w-full">
                                            <RequestEntry id={item.id} item={item} />
                                        </div>
                                    );
                                })
                                :
                                rows.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {

                                                if (item['data'].status == 2) return setAlert({
                                                    show: true,
                                                    type: 'info',
                                                    message: 'This request has been completed.'
                                                });

                                                if (item['data'].status == 3) return setAlert({
                                                    show: true,
                                                    type: 'info',
                                                    message: 'This request has been denied.'
                                                });

                                                if (item['data'].status != 1) return setForm(item.data);

                                                setRelease(item['data']);

                                            }} className="h-12 w-full">
                                            <RequestEntry id={item.id} item={item} />
                                        </div>
                                    );
                                })
                                }
                    </div>
                </div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={!!release}

                >
                    <div className="w-[350px] h-[300px] bg-white rounded-lg text-[#1F2F3D]">
                        <div className="flex justify-end pt-3 px-4">
                            <Close
                                onClick={() => {
                                    setRelease(null);
                                }}
                                className="cursor-pointer" />
                        </div>
                        <div className="h-full flex flex-col items-center p-4  font-arimo">
                            <img src={releaseIcon} className="w-20 " />
                            <h1 className=" font-bold text-xl py-4">Release Document</h1>
                            <div className="flex h-full items-end pb-14">
                                <button
                                    onClick={() => {
                                        updateFormStatus(release.id, 2).then((val) => {
                                            setAlert({
                                                show: true,
                                                type: 'success',
                                                message: 'The requested document has been released.'
                                            });

                                            createNotification(release['form'], 2);
                                            setRelease(null);
                                        }).catch((err) => {
                                            console.log(err);
                                            setAlert({
                                                show: true,
                                                type: 'error',
                                                message: 'Something went wrong.'
                                            });
                                            setRelease(null);
                                        })
                                    }}
                                    className="p-2 w-48 bg-[#FEC51C] font-bold rounded-lg">Release</button>
                            </div>
                        </div>

                    </div>
                </Backdrop>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={!!form}

                >
                    {!!form && <RequestViewer document={document} setAlert={setAlert} form={form} close={() => { setForm(null) }} />}
                </Backdrop>
            </div>
        </div>
    )
}

export default RequestList