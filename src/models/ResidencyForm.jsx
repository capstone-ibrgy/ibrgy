import { useReducer } from 'react'

export function ResidencyForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            purpose: '',
            uploaded_docs: '',
            pick_up: '',
            payment_method: ''
        });

    return { form, updateForm };
}





