import { useReducer } from 'react'

export function IndigencyForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            purpose: '',
            income: '',
            uploaded_docs: '',
            pick_up: '',
            payment_method: ''
        });

    return { form, updateForm };
}





