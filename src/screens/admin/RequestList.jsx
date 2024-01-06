import React, { useState, useEffect } from "react";
import doc from "../../assets/images/Community Logo (5).png";
import { format } from "date-fns";
import RequestEntry from "../../components/RequestEntry";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Backdrop } from "@mui/material";
import RequestViewer from "./RequestViewer";

function RequestList({ forms, document, setAlert, screen }) {

    const [rows, setRows] = useState([]);
    const [form, setForm] = useState(null);

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
                data
            };

            rows.push(request);
        });

        setRows(rows);
    }, [forms, document, screen]);

    return (
        <div className="flex flex-col w-full h-full font-arimo">
            <h1 className="text-3xl font-bold mt-3 mb-1">Requests List</h1>
            <div className="w-full h-full rounded-[20px] bg-[#1F2F3D] pb-4 mt-2 mb-4 overflow-hidden">
                <div className="relative flex flex-col w-full h-full bg-[#D9D9D9] rounded-t-[20px] text-white">
                    <div className="absolute px-6 flex flex-row h-20 bg-[#1F2F3D] rounded-[20px] w-full items-center">
                        <img src={doc} className="h-20 w-20" />
                        <h1 className="text-2xl font-bold mx-4 flex-1">{document.name}</h1>
                        <div className="h-12 flex flex-row px-5 items-center">
                            <p className="pr-2">Show</p>
                            <select
                                name="show"
                                id="show"
                                className="bg-[#1F2F3D] border-2 border-white"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <p className="font-bold pl-2">entries</p>
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
                        {rows.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setForm(item.data)
                                    }} className="h-12 w-full">
                                    <RequestEntry id={item.id} item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
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