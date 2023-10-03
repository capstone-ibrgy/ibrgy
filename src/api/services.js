import { 
    doc, 
    collection, 
    addDoc, 
    Timestamp, 
    updateDoc, 
    arrayUnion, 
    arrayRemove,
    getDoc
} from 'firebase/firestore';

import { db } from '../../firebase'

const addUserProfile = async (userId, profile ) => {

    await addDoc(doc(db, "profiles", userId), {
       profile    
    });
    
}

const checkUserProfile = async (userId) => {

    await getDoc(doc(db, "profiles", userId))
        .then((querySnapshot)=> {               
            return querySnapshot.data(); 
        });
}

export { addUserProfile, checkUserProfile }
