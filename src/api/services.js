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
    const formType = ["cedula", "clearance", "residency", "indigency", "added"]
    return addDoc(collection(db, "forms"), {
        "formType": form.formType > 3 ? form.name.toString().toLowerCase() : formType[form.formType],
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

const getDocuments = () => {
    const docRef = collection(db, "documents");

    return query(docRef)
}

const updateDocument = (documentId, update) => {

    return updateDoc(doc(db, "documents", documentId), {
        update
    });
}

const addDocument = (document) => {

    return addDoc(collection(db, "documents"), {
        name: document.name,
        description: document.description,
        id: document.id,
        price: document.price,
        fields: document.fields
    });
}

const updateFormStatus = (formId, status) => {

    return updateDoc(doc(db, "forms", formId), {
        status: status
    });

}

export {
    addUserProfile,
    getUser,
    requestForm,
    getRequestForms,
    getDocuments,
    updateDocument,
    addDocument,
    getAllRequestForms,
    updateFormStatus,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    storage,
    onSnapshot,
    Timestamp
}
