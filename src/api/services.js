import {
    doc,
    collection,
    setDoc,
    addDoc,
    Timestamp,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDoc,
    getDocs,
    where,
    query,
    orderBy,
    onSnapshot
} from 'firebase/firestore';

import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import { db, storage } from '../../firebase'

const addUserProfile = (userId, profile) => {

    return setDoc(doc(db, "profiles", userId), {
        profile
    });

}

const getUser = (userId) => {
    return getDoc(doc(db, "profiles", userId));
}

const requestForm = (form) => {
    const formType = ["cedula", "clearance", "residency", "indigency"]
    return addDoc(collection(db, "forms"), {
        "formType": formType[form.formType],
        "formTypeId": form.formType,
        "userId": form.profile.userId,
        "createdAt": Timestamp.now(),
        "status": 0,
        form
    });
}

const getAllRequestForms = () => {
    const formRef = collection(db, "forms");

    return formRef;
}

const getRequestForms = (userId) => {
    const formRef = collection(db, "forms");

    return query(formRef, where('userId', '==', userId), orderBy('createdAt', 'asc'))
}

export {
    addUserProfile,
    getUser,
    requestForm,
    getRequestForms,
    getAllRequestForms,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    storage,
    onSnapshot,
    Timestamp
}
