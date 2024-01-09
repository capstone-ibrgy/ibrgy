import { useReducer } from 'react'

export function AdminProfile() {
    const [profile, updateProfile] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            userId: null,
            userAvatar: null,
            lastname: '',
            firstname: '',
            mi: '',
            age: '',
            gender: '',
            birthdate: '',
            address: '',
            position: '',
            phone: '',
            admin: true
        });

    return { profile, updateProfile };
}