import React, { useEffect, useReducer } from "react";
import { getContact } from "../api/services";

const Contact = () => {
  const [details, updateDetails] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      email: "",
      number: "",
      address: ""
    }
  );

  const fetchContact = async () => {
    getContact()
      .then((value) => {
        if (!value) {
          return;
        }
        updateDetails(value.data()["data"]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <>
      <div className="w-full h-full py-4 overflow-y-auto">
        <h1 className="text-3xl font-bold font-arimo mb-8">
          Get in touch with us
        </h1>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]">
          Send us a message
        </h1>
        <div className="flex flex-row gap-4">
          <h1 className="w-36">Email Address: </h1>
          {details.email}
        </div>
        <div className="flex flex-row gap-4">
          <h1 className="w-36">Contact # </h1>
          {details.number}
        </div>
        <h1 className="text-2xl font-bold font-arimo mb-2 pb-2 pt-8 border-b-2 border-[#1F2F3D]">
          Find Us
        </h1>
        <div className="mb-6">{details.address}</div>
      </div>
    </>
  );
};

export default Contact;
