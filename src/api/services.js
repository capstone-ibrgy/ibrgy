import { 
    doc, 
    collection, 
    setDoc, 
    Timestamp, 
    updateDoc, 
    arrayUnion, 
    arrayRemove,
    getDoc
} from 'firebase/firestore';

import { db } from '../../firebase'

const addUserProfile = (userId, profile ) => {

    return setDoc(doc(db, "profiles", userId), {
       profile    
    });
    
}

const getUser = (userId) => {
    return getDoc(doc(db, "profiles", userId));
}

export { addUserProfile, getUser }
