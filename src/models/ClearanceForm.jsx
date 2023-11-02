import { useReducer } from 'react'

export function ClearanceForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            nickname: '',
            purpose: '',
            uploaded_docs: '',
            pick_up: '',
            payment_method: ''
        });

    return { form, updateForm };
}





