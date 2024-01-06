import React, { useState, useRef, useEffect, useReducer } from "react";
import doc from "../../assets/images/Community Logo (5).png";
import upload from "../../assets/images/Community Logo (16).png";
import {
    requestForm,
    ref,
    storage,
    uploadBytesResumable,
    getDownloadURL,
} from "../../api/services";

import CloseIcon from "@mui/icons-material/Close";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RequestForms = ({ profile, setProgress, setShowUpload, documents }) => {
    const [startDate, setStartDate] = useState();
    const [fileError, setFileError] = useState("");

    const [form, updateForm] = useReducer(
        (prev, next) => {
            return { ...prev, ...next };
        },
        {
            name: documents.name,
            formId: null,
            status: 0,
            formType: 4,
            profile: null,
            income: "Below Php 10,000",
            uploaded_docs: null,
            pick_up: "",
            payment_method: "Cash on pick-up",
            fields: documents.fields,
        }
    );

    // const [fields, setFields] = useState([
    //     {
    //         label: 'Height (in cm)',
    //         name: 'height',
    //         value: null
    //     },
    //     {
    //         label: 'Weight (in kg)',
    //         name: 'weight',
    //         value: null
    //     }
    // ]);

    const hiddenFileInput = useRef(null);

    useEffect(() => {
        updateForm({ profile: profile });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.uploaded_docs || form.uploaded_docs == "") {
            setFileError("Please upload the required documents.");
            return;
        }

        updateForm({
            income: e.target[2].value,
            payment: "Cash on pick-up",
        });

        setShowUpload(true);
        handleUpload();
    };

    const handleUpload = () => {
        const file = form.uploaded_docs;

        const storageRef = ref(
            storage,
            `/${form.profile.userId}/uploads/${file.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    var newForm = form;

                    newForm.uploaded_docs = url;

                    form["fields"].map((item) => {
                        newForm[item.name] = item.value;
                    });

                    requestForm(newForm);
                    setShowUpload(false);
                    resetForm();
                });
            }
        );
    };

    const resetForm = () => {
        form["fields"].map((item, i) => {
            let temp = [...form["fields"]];

            temp[i]["value"] = "";

            updateForm({ fields: temp });
        });

        updateForm({
            height: "",
            weight: "",
            income: "Below Php 10,000",
            uploaded_docs: null,
            pick_up: "",
            payment_method: "",
        });
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "application/pdf",
        ];
        const fileUploaded = event.target.files[0];

        if (!allowedTypes.includes(fileUploaded.type)) {
            setFileError(
                "Invalid file type. Please upload a JPEG, PNG, or PDF file."
            );
            return;
        }
        setFileError(null);
        updateForm({ uploaded_docs: fileUploaded });
    };

    return (
        <div className="relative w-full h-full overflow-auto">
            <h1 className="text-3xl font-bold my-2">Request Form</h1>
            <div className="relative flex flex-col items-center justify-center">
                <div className={`flex flex-col w-[80%] rounded-[20px] bg-[#D9D9D9]`}>
                    <div className="relative flex flex-row w-full h-16 bg-[#1F2F3D]  rounded-[20px] items-center px-6 gap-6">
                        <img src={doc} className="w-14 h-14" />
                        <h1 className="text-white text-xl font-bold">{documents.name}</h1>
                        <div className="absolute right-[-1px] rounded-[20px] w-32 h-full bg-[#FEC51C] py-3 px-6">
                            <h1 className="font-bold text-lg text-center leading-tight">
                                COST: {documents.price} Php
                            </h1>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                        className="flex flex-col w-full flex-1 px-6 py-4 gap-2"
                    >
                        <div className="flex flex-col gap-2 pr-[33%]">
                            {documents["fields"].map((item, i) => {
                                return (
                                    <div className="flex-1 flex flex-col">
                                        <label className="font-bold text-[#1F2F3D] text-sm pb-1">
                                            {item.label}
                                        </label>
                                        <input
                                            value={form["fields"][i]["value"]}
                                            required
                                            onChange={(e) => {
                                                let temp = [...form["fields"]];

                                                temp[i]["value"] = e.target.value;

                                                updateForm({ fields: temp });
                                            }}
                                            className="border-2 h-12 border-[#1F2F3D] bg-[#D9D9D9] rounded-[10px] px-2"
                                        />
                                    </div>
                                );
                            })}
                            <div className="flex-1 flex flex-col">
                                <label className="font-bold text-[#1F2F3D] text-sm py-1">
                                    Monthly Income
                                </label>
                                <select
                                    onChange={(e) => {
                                        updateForm({ income: e.target.value });
                                    }}
                                    require={true}
                                    name="income"
                                    id="income"
                                    className="border-2 h-12 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-2"
                                >
                                    <option value="Below Php 10,000">below Php 10,000</option>
                                    <option value="Php 10,000 - Php 20,000">
                                        Php 10,000 - Php 20,000
                                    </option>
                                    <option value="Php 20,000 - Php 40,000">
                                        Php 20,000 - Php 40,000
                                    </option>
                                    <option value="Php 40,000 - Php 60,000">
                                        Php 40,000- Php 60,000
                                    </option>
                                    <option value="Php 60,000 - Php 100,000">
                                        Php 60,000 - Php 100,000
                                    </option>
                                    <option value="Above Php 100,000">above Php 100,000</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row h-full">
                            <div className="flex-1 flex flex-row border-2 border-[#1F2F3D] h-42 rounded-[10px] items-center justify-center gap-2">
                                <div
                                    onClick={handleClick}
                                    className="text-[#1F2F3D] font-bold px-2 text-sm cursor-pointer"
                                >
                                    <input
                                        onChange={handleChange}
                                        ref={hiddenFileInput}
                                        type="file"
                                        className="hidden"
                                        accept="image/png, image/gif, image/jpeg"
                                    />
                                    {!form.uploaded_docs
                                        ? "Upload Zone Clearance and/or Other Documents"
                                        : "Chosen file: " + form.uploaded_docs.name}
                                </div>
                                {!form.uploaded_docs ? (
                                    <img className="h-6" src={upload} alt="" />
                                ) : (
                                    <CloseIcon
                                        className="cursor-pointer"
                                        onClick={() => {
                                            updateForm({ uploaded_docs: null });
                                        }}
                                        fontSize="small"
                                    />
                                )}
                            </div>
                            <div className="w-1/3 pl-2">
                                <div className="flex flex-col">
                                    <label className="bg-[#D9D9D9] font-arimo font-bold text-[#1F2F3D] text-sm py-1">
                                        Preferred Pick-up Date
                                    </label>
                                    <DatePicker
                                        placeholderText="Month Day, Year"
                                        dateFormat={["MMMM dd, yyyy"]}
                                        selected={startDate}
                                        required={true}
                                        onSelect={(e) => {
                                            if (e != null) {
                                                updateForm({ pick_up: e });
                                            }
                                        }}
                                        onChange={(e) => {
                                            setStartDate(e);
                                            updateForm({ pick_up: e });
                                        }}
                                        className="text-sm border-2 h-12 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-6"
                                    />
                                </div>
                                <div className="">
                                    <label className="font-bold text-[#1F2F3D] text-sm py-1">
                                        Payment Method
                                    </label>
                                    <div className="text-sm flex items-center border-2 h-12 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] text-red-600 justify-center font-bold">
                                        Cash on pick-up only
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full h-16 justify-between">
                            <p
                                className={`${!fileError && "opacity-0"
                                    } ml-2 flex-1 text-sm font-semibold text-red-600`}
                            >
                                {fileError}
                            </p>
                            <button
                                type="submit"
                                className="self-center cursor-pointer h-10 flex items-center justify-center ml-2 w-1/3 rounded-[10px] drop-shadow-lg bg-[#FEC51C]"
                            >
                                <h1 className="font-bold">Submit</h1>
                            </button>
                        </div>
                    </form>
                    <div className="w-full h-4 bg-[#1F2F3D] rounded-b-[20px]"></div>
                </div>
            </div>
        </div>
    );
};

export default RequestForms;