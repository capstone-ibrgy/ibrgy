import React, { useState, useEffect } from "react";
import doc from "../../assets/images/Community Logo (5).png";
import CedulaUpdate from "./CedulaUpdate";
import { format } from "date-fns";
import RequestEntry from "../../components/RequestEntry";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Backdrop } from "@mui/material";

const Cedula = ({ forms }) => {
  //const [height, setHeight] = useState(400)

  const [update, setUpdate] = useState(false);
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    var rows = [];

    if (!forms) return;

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
  }, []);

  const handleClick = () => {
    setUpdate(true);
  };

  const handleClose = () => {
    setShowForm(false);
  }

  const stateBtn = (status) => {
    const button = [
      <div className={`flex flex-row w-28 h-8  bg-[#FFA500] rounded-md text-black items-center px-2 shadow-md`}>
        <ArrowDownwardIcon fontSize='small' />
        <p className='text-sm'>Processing</p>
      </div>,
      <div className={`flex flex-row w-28 h-8  bg-[#0000FF]/70 rounded-md text-white items-center px-2 shadow-md`}>
        <ArrowDownwardIcon fontSize='small' />
        <p className='text-sm'>For Pick-up</p>
      </div>,
      <div className={`flex flex-row w-28 h-8  bg-[#00FF00]/70 rounded-md text-black items-center px-3 shadow-md`}>
        <ArrowDownwardIcon fontSize='small' />
        <p className='text-sm'>Released</p>
      </div>
    ]

    return button[status]
  }

  return (
    <div className="flex flex-col w-full h-full font-arimo">
      <h1 className="text-3xl font-bold font-arimo mt-2 mb-4">Requests List</h1>
      <div className={`h-[90%] w-full overflow-auto`}>
        <div className="flex flex-col h-[90%] w-full gap-4">
          <div className="bg-[#1F2F3D] w-full h-[90%] rounded-[20px] pb-4">
            <div className="bg-[#D9D9D9] flex flex-col w-full h-full rounded-t-[20px]">
              <div className="bg-[#D9D9D9] border-[#1F2F3D] border-2 rounded-t-[20px] h-[35%] w-full flex flex-col">
                <div className="h-[55%] w-full bg-[#1F2F3D] flex justify-center py-2 rounded-[15px]">
                  <div className="h-full w-[90%] flex flex-row items-center text-white">
                    <img src={doc} alt="" className="w-16 h-16" />
                    <div className="text-2xl font-bold mx-4 w-full">
                      Community Tax Certificate (Cedula)
                    </div>
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
                </div>
                <div className="w-full h-full flex">
                  <div className="bg-[#D9D9D9] flex flex-row text-[#1F2F3D] font-bold gap-4 w-full items-center">
                    <label className=" w-[15%] ml-10">No.</label>
                    <label className=" w-full">Name</label>
                    <label className="w-[90%]">Date Requested</label>
                    <label className="w-[90%]">Claiming Date</label>
                    <label className="w-[80%] text-center mr-8">Status</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-full my-3">
                {rows.map((item) => {
                  return (
                    <div onClick={() => {
                      setSelected(item.data)
                      setShowForm(true)
                    }} className="z-10 flex cursor-pointer flex-row text-[#1F2F3D] gap-4 w-full h-12 items-center hover:bg-[#fec51c]  ">
                      <p className="w-[15%] ml-10">{item["no"]}</p>
                      <p className="w-full">{item["name"]}</p>
                      <p className="w-[90%]">{item["date"]}</p>
                      <p className="w-[90%]">{item["pick_up"]}</p>
                      <p className="flex justify-center w-[80%] text-center mr-8 cursor-pointer">
                        {stateBtn(item["status"])}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showForm}
          >
            {showForm && <CedulaUpdate form={selected} close={() => { setShowForm(false) }} />}
          </Backdrop>
          {/* <div className="w-full flex justify-end">
            <button

              onClick={handleClick}
              className="bg-[#FEC51C] h-12 w-[20%] rounded-lg font-bold drop-shadow-lg opacity-70"
            >
              Update
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cedula;
