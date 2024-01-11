import React, { useEffect, useReducer } from "react";
import { getBarangay } from "../api/services";

const Citizens = () => {
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchBarangay();
  }, []);

  return (
    <>
      <div className="w-full h-full py-4 overflow-y-auto">
        <h1 className="text-3xl font-bold font-arimo mb-8">
          Barangay {details.name}
        </h1>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]">
          Vision
        </h1>
        <div className="mb-6">{details.vision}</div>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]">
          Mission
        </h1>
        <div className="mb-6">{details.mission}</div>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]">
          Our Service Pledge
        </h1>
        <div className="mb-6">{details.pledge}</div>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]">
          Functional Departments and Directory
        </h1>
        <div className="mb-6">{details.department}</div>
      </div>
    </>
  );
};

export default Citizens;
