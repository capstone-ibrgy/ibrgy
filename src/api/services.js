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

    console.log(form)
    const formType = ["cedula", "clearance", "residency", "indigency"]
    return addDoc(collection(db, "forms"), {
        "formType": formType[form.formType],
        "formTypeId": form.formType,
        "userId": form.profile.userId,
        "createdAt": Timestamp.now(),
        form
    });
}

const getRequestForms = (userId) => {
    const formRef = collection(db, "forms");

    return query(formRef, where('userId', '==', userId), orderBy('createdAt', 'desc'))
}

export {
    addUserProfile,
    getUser,
    requestForm,
    getRequestForms,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    storage,
    onSnapshot
}
