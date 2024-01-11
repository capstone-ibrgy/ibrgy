import React, { useEffect, useReducer, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { getBarangay, setBarangay } from "../api/services";

const Barangay = ({ setAlert }) => {
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
      name: "",
      vision: "",
      mission: "",
      pledge: "",
      department: "",
    }
  );

  const fetchBarangay = async () => {
    getBarangay()
      .then((value) => {
        if (!value) {
          return;
        }
        updateDetails(value.data()["details"]);
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
    fetchBarangay();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await setBarangay(details)
      .then((_) => {
        setLoading(false);
        setAlert({
          show: true,
          type: "success",
          message: "Barangay has been updated successfully.",
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
        <h1 className="text-3xl">
          Barangay{" "}
          <span>
            <input
              type="text"
              placeholder={details.name}
              className={`placeholder:text-[#1F2F3D] w-60`}
              disabled={edit ? false : true}
              onChange={(e) => {
                updateDetails({ name: e.target.value });
              }}
            />
          </span>{" "}
        </h1>
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
        Vision
      </h1>
      <textarea
        rows={3}
        type="text"
        placeholder={details.vision}
        className="placeholder:text-[#1F2F3D] w-full"
        disabled={edit ? false : true}
        onChange={(e) => {
          updateDetails({ vision: e.target.value });
        }}
      />
      <h1 className="text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]">
        Mission
      </h1>
      <textarea
        rows={3}
        type="text"
        placeholder={details.mission}
        className="placeholder:text-[#1F2F3D] w-full"
        disabled={edit ? false : true}
        onChange={(e) => {
          updateDetails({ mission: e.target.value });
        }}
      />
      <h1 className="text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]">
        Our Service Pledge
      </h1>
      <textarea
        rows={3}
        type="text"
        placeholder={details.pledge}
        className="placeholder:text-[#1F2F3D] w-full"
        disabled={edit ? false : true}
        onChange={(e) => {
          updateDetails({ pledge: e.target.value });
        }}
      />
      <h1 className="text-2xl font-bold mb-2 pb-2 border-b-2 border-[#1F2F3D]">
        Functional Departments and Directory
      </h1>
      <textarea
        rows={3}
        type="text"
        placeholder={details.department}
        className="placeholder:text-[#1F2F3D] w-full"
        disabled={edit ? false : true}
        onChange={(e) => {
          updateDetails({ department: e.target.value });
        }}
      />
    </form>
  );
};

export default Barangay;
