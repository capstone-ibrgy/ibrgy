import { useReducer } from 'react'

export function UserProfile() {
    const [profile, updateProfile] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            userId: null,
            lastname: '',
            firstname: '',
            mi: '',
            age: '',
            gender: '',
            birthdate: '',
            birthplace: '',
            address: '',
            national: '',
            civilstatus: '',
            occupation: '',
            phone: ''
        });

    return { profile, updateProfile };
}





