import { useReducer } from 'react'

export function IndigencyForm() {
    const [form, updateForm] = useReducer((prev, next) => {
        return { ...prev, ...next }
    },
        {
            formType: 3,
            profile: null,
            purpose: '',
            income: 'Below Php 10,000',
            uploaded_docs: null,
            pick_up: '',
            payment_method: 'Cash on pick-up'
        });

    return { form, updateForm };
}





