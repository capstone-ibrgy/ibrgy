import React, { useEffect, useReducer, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { getContact, setContact } from "../api/services";

const AdminContact = ({ setAlert }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const [details, updateDetails] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      email: "",
      number: "",
      address: "",
    }
  );

  const fetchContact = async () => {
    getContact()
      .then((value) => {
        if (!value) {
          return;
        }
        updateDetails(value.data()["data"]);
        setLoading(false);
      })
      .catch((e) => {
        setAlert({
          type: "error",
          message: "Something went wrong, please login again.",
        });
      });
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await setContact(details)
      .then((_) => {
        setLoading(false);
        setAlert({
          show: true,
          type: "success",
          message: "Contact has been updated successfully.",
        });
        handleEdit();
      })
      .catch((_) => {
        setLoading(false);
        setAlert({
          show: true,
          type: "error",
          message: "Something went wrong, please try again.",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="h-full overflow-auto font-arimo">
      <div className="flex flex-row gap-2 font-bold mb-8 mt-2 select-none">
        <h1 className="text-3xl">Get in touch with us</h1>
        {edit ? (
          <button
            type="submit"
            className="bg-[#FEC51C] text-lg py-1 px-8 rounded-lg shadow-lg hover:bg-[#FEC51C]/90"
          >
            Update
          </button>
        ) : (
          <div
            className="flex flex-row items-center gap-1 cursor-pointer"
            onClick={() => {
              handleEdit();
            }}
          >
            <EditIcon fontSize="large" />
            <h1 className="text-lg">Edit</h1>
          </div>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]">
        Send us a message
      </h1>
      <div className="flex flex-row gap-4">
        <h1 className="w-36">
            Email Address:
        </h1>
        <input
            type="text"
            placeholder={details.email}
            className="placeholder:text-[#1F2F3D] w-[40%]"
            disabled={edit ? false : true}
            onChange={(e) => {
            updateDetails({ email: e.target.value });
            }}
        />{" "}
        </div>
        <div className="flex flex-row gap-4">
            <h1 className="w-36">
                Contact #
            </h1>
            <input
                type="text"
                placeholder={details.number}
                className="placeholder:text-[#1F2F3D] w-[40%]"
                disabled={edit ? false : true}
                onChange={(e) => {
                updateDetails({ number: e.target.value });
                }}
            />{" "}
        </div>
        
      
      <h1 className="text-2xl font-bold mb-2 pb-2 pt-8 border-b-2 border-[#1F2F3D]">
        Find Us
      </h1>
      <textarea
        rows={2}
        type="text"
        placeholder={details.address}
        className="placeholder:text-[#1F2F3D] w-full"
        disabled={edit ? false : true}
        onChange={(e) => {
          updateDetails({ address: e.target.value });
        }}
      />
    </form>
  );
};

export default AdminContact;
