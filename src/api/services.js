import {
    doc,
    collection,
    setDoc,
    addDoc,
    Timestamp,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDoc
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

const requestCedula = (form) => {
    return addDoc(collection(db, "cedulas"), {
        form
    });
}

export {
    addUserProfile,
    getUser,
    requestCedula,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    storage
}
